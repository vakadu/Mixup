import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';

const popupModal = props => {    
    return (
        <Modal animationType ="fade" transparent = {true}
            visible = { props.popup }
        >
        <View style={ styles.modal }>
            <TouchableOpacity onPress={ props.popupShow } style={ styles.modal__close }>
                <View style={ styles.modal__left }/>
                <View style={ styles.modal__right }/>
            </TouchableOpacity>
            <View style={ styles.modalContent }>
                <ScrollView style={{ width: "100%" }}>
                    <View style={ styles.content }>
                        <Text style={ styles.content__header }>Coupons</Text>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                        <View style={ styles.content__wrapper }>
                            <View style={ styles.content__top }>
                                <Text style={ styles.content__top__text }>15% off INR 3000</Text>
                            </View>
                            <View style={ styles.content__bottom }>
                                <Text style={ styles.content__bottom__text }>INDEPENDENCE</Text>
                                <View style={ styles.content__bottom__image }>

                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(0, 0, 0, 0.8)',
        paddingTop: 124, 
    },
    modal__close: {
        position: 'absolute',
        top: 54,
        left: '50%',
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0.16)',
        borderRadius: 40/2
    },
    imgResponsive: {
        height: 40,
        width: 40, 
        resizeMode : 'contain'
    },
    modalContent: {
        width: '90%',
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#FFF',
        borderRadius: 32,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.16)',
        paddingHorizontal: 24,
        paddingVertical: 24
    },
    modal__left: {
        position: 'absolute',
        width: 2.79,
        height: 22.35,
        left: 19,
        top: 9,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        transform: [{ rotate: "-45deg" }]
    },
    modal__right: {
        position: 'absolute',
        width: 2.79,
        height: 22.35,
        left: 19,
        top: 9,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        transform: [{ rotate: "-135deg" }]
    },
    content: {
        width: '100%',
        alignItems: 'center'
    },
    content__header: {
        fontSize: 24,
        marginBottom: 17
    },
    content__wrapper: {
        backgroundColor: '#FFEDE8',
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 12,
        width: '100%',
        marginBottom: 8
    },
    content__top: {
        fontWeight: '600',
        fontSize: 16
    },
    content__bottom: {
        paddingTop: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    content__bottom__text: {
        fontWeight: '600',
        fontSize: 12
    },
    content__bottom__image: {
        width: 28,
        height: 28,
        backgroundColor: '#FFFFFF',
        borderRadius: 8
    }
});

export default popupModal;
