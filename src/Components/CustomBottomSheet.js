import React, { Component } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Animated, UIManager, findNodeHandle, Keyboard } from 'react-native';
import PropTypes from 'prop-types';

export default class CustomBottomSheet extends Component {

    constructor() {
        super();
        this.childrenRef = React.createRef();
        this.backdropAnimated = new Animated.Value(0);
        this.bottomSheetAnimated = new Animated.Value(10000);

        // Never changing "this" values
        this.childrenHeight = 0;

        this.state = {
            showBottomSheet: false,
            type: '',
            load: {},
            keyboardVisible: false
        };
    }

    componentDidMount() {
        this.keyboardDidShow = Keyboard.addListener('keyboardDidShow', () => this.setState({ keyboardVisible: true }));
        this.keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => this.setState({ keyboardVisible: false }));
    }

    componentDidUpdate(prevProps) {
        if (this.props.showBottomSheet !== prevProps.showBottomSheet && this.props.showBottomSheet) {
            this.setState({ showBottomSheet: true }, () => {
                this.showingBottomSheet().then((height) => {
                    this.childrenHeight = height;
                    this.bottomSheetAnimated.setValue(height);
                    Animated.parallel([
                        Animated.timing(
                            this.backdropAnimated, {
                            toValue: 1,
                            duration: 200,
                            useNativeDriver: true
                        }),
                        Animated.timing(
                            this.bottomSheetAnimated, {
                            toValue: 0,
                            duration: 500,
                            useNativeDriver: true
                        })
                    ]).start();
                });
            });
        }
        else if (this.props.showBottomSheet !== prevProps.showBottomSheet && !this.props.showBottomSheet) {
            //Hide bottom sheet
            Animated.parallel([
                Animated.timing(
                    this.backdropAnimated, {
                    toValue: 0,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(
                    this.bottomSheetAnimated, {
                    toValue: this.childrenHeight,
                    duration: 300,
                    useNativeDriver: true
                })
            ]).start(() => {
                // Hide bottomsheet using states
                this.setState({ showBottomSheet: false });
            });
        }
    }

    componentWillUnmount() {
        this.keyboardDidShow.remove();
        this.keyboardDidHide.remove();
    }

    showingBottomSheet = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                UIManager.measure(findNodeHandle(this.childrenRef), (frameX, frameY, frameWidth, frameHeight) => {
                    resolve(frameHeight);
                });
            }, 0);
        });
    }

    hideBottomSheet = () => {
        this.state.keyboardVisible ? Keyboard.dismiss() : this.props.hideBottomSheet();
    }

    reference = ref => this.childrenRef = ref

    render() {
        const content = this.state.showBottomSheet ?
            <View
                style={{ ...styles.container, backgroundColor: this.props.bgColor }}>
                <Animated.View
                    style={[styles.main, { opacity: this.backdropAnimated }]}>
                    <TouchableWithoutFeedback onPress={this.hideBottomSheet}>
                        < View style={styles.backdrop} />
                    </TouchableWithoutFeedback>
                    <Animated.View style={{ transform: [{ translateY: this.bottomSheetAnimated }] }}>

                        {/* Use collapsable here to disable the optimization of this view. 
                        Since this view does only render children, will automatically remove 
                        these from native hierarchy in order to improve the performance.
                        collapsable={true} disables the optimization and facilitate to measure size */}

                        <TouchableWithoutFeedback
                            onPress={() => { }}
                            ref={this.reference}
                            collapsable={false}>
                            {this.props.children}
                        </TouchableWithoutFeedback>
                    </Animated.View>
                </Animated.View>
            </View>
            : null;

        return content;
    }
}

CustomBottomSheet.propTypes = {
    children: PropTypes.node,
    showBottomSheet: PropTypes.bool,
    hideBottomSheet: PropTypes.func,
    saveDetails: PropTypes.func,
    type: PropTypes.string,
    load: PropTypes.object,
    searchedIosApp: PropTypes.object,
    searchedApps: PropTypes.array,
    bgColor: PropTypes.string
};


const styles = StyleSheet.create({
    backdrop: {
        backgroundColor: 'transparent',
        flex: 1
    },
    container: {
        backgroundColor: 'transparent',
        elevation: 100,
        position: 'absolute',
        zIndex: 100,
        ...StyleSheet.absoluteFillObject,
    },
    main: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flex: 1,
    }
});


