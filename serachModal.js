import React from 'react';
import { Modal, View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const CLOSE = "data:image/png;base64,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";

const SEARCH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBrZIxC8IwEIWvVWjBoaBDh0JFBEVHoYP//zfo7uDg4ODQIVjB9+iBSUgbER98NFzy7i65JvJRDiow13UH7uACjIxoBo6gBpmVrAQNWA4Zcz2wiOwXoc2NMiYaD34w1Y1rxPyQ/jqZb2ZbrcTV6lnH3PkZBzTxA6lmLCNGVpxK375j5hyrSHU+6C3UitEka/AS9/6c/w6swAk8bXNirdl6rWujnbBVToJ/2h6cJfK4rFbo1483gfjX+l+CRH4TE2zfSykakTTaMmQAAAAASUVORK5CYII=";

const AMAZON = "data:image/png;base64,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";
const IKEA = "data:image/png;base64,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";
const HM = "data:image/png;base64,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";
const REDBUS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAewSURBVHgB7ZwJbBRVGMf/07167bZ0S4FS6oIILVQsAiooUowaUTRC8CCiKBY1JCZERfEAwTMSFTQeKHIIgkEiUCAcEWiRSyhIIUoRKN2WlrLQ3S7bbel2j/F7s0e7Q4vLsFuhnV/ymPO92ffv977vmxnecAgRnucTafEolRFUsqkYqCTi2sRKxUiliEoBlTyO46wIBySEgco8KjX89c1iKgZIhSonUpnLtz/mXq7fXCtiGGiRD++waI8YqYykYWQUH4gS7yAxmH9oz2IwDFTyfX0NIshCOoBliDFCZCkBQXhvFDmEjiOGHyOVgf4o1HzIvIuOJwbDAG/fBQQL8Q2VUnRserKh47eQWZCZyv7hfL6jBjLMh/RkFvIoZBjCrQkTJAcyfkYwQW6BjJ9s5kOY/7hW71rbGisThIdMgCjIBCELIkIWRIQsiAhZEBGyICJkQUQo0QbwTicclWfQWFEJ55kquCxmOM9Xw3XhAjz2Orhra+GpqwfvdoL3eOtwSgUVJThNNBSxMVAmJyN+0EDox42lgxwiRdgTM099PRpOlqD+r6OoP1oMh7FM2HaeO8cevOBq6fJiLrpPn4ZIERZBnCYTLKvzYN26DfV/HwXvaEQk6b10EXTD70QkkCwI73bDvHIVzGvyUFd4MKJmLEbVtQuydheAiwq/C5TkQ9xWK0pemAI7E4IRohi64Xch8aEHcHrGLCRPeAoxfW/yHvDwsB84SFa2NqR2nGdNsO/bD+3QOxBuJEls2bCpSYwrILp3LyQ/8Rg4lRraO26Dfiw9m6Lhpb1zKAyffYKEe3JCbsu2YycigSQLqd2zBymTJqKxsgqx/TJQX1wM2669SHl2AmIyM+E2m1E1f4EQURTaeOgfGwdNjzRoDDcEtcMiS/nM2Yi/fQj6rFxOQ6ErndcDWvIP1o2b4LJeQNLoB+GqscK2ew+Sn3wc8cwqyCDt+wubfg9FKYZWq8XVIkkQz8WLSJvxlrDuqq6mH78FupwRSLz/Plg3b4F2ZA5is2/BsYfHosesGdCOGI4LW7dD0/vGoHY4jRqdHhmN+MG3ou5QEWy/70RMRgbSP5yN+sNHBEFS33gVtfsK4SKR0z9+HzXrNwgW5jZbAu1s37YdOwoK8Pm8ubhaJHolb7Wz87/HkcHDcPq9D4WhYP5lFc4v/Qmmb79D7M1Zwr4kGhZl095E+fR3cH7RkuBmyPfwLhec1RZE9+1DYvRt9Yoc5SJC2FYoBP/BhkxjRYVwTK/XIzW1G35esQIv5E7GvTkjsfCHhZDesytEqYsXlm76C7JOKRJ0wnZMVn/oyDoUCQmonPMZPI0O70U0mhbb4RscZF2bcfbLr1i4Q9KY1p931x08hLLXpgt1UnInIX3OR2g4cVI4VlFejpKSEvxTfAwqlRIvTZmCgvztkNQ3SECR2Clo20Xm20A/KMZgQPWy5YiKi0NUdDTlJfk0/muQ+upUMnMVtMOGBtXj1DRkRo8S/A6r46bMlW9oEI6l5D4nZLfqtDSAhkz8kEFkIB4hzKu7p0KZlCScLyaT2upP1rlm9WpIQZKFaNJ7eNNtfwJGVnJy4mQ4qqrQa/7XSJ89UxDEY7fjFIXnqNhYdH/9FapjE+oxWEbLu13kFz6gEDweZgq5VWQp9oN/UgQ7QEI9CHXnzoLQvMMhDK20t6fjpmWLoeycjPK3Z6L4xHHkPjcJKhJWTYKzpYqWCspP1LQuBUmJmWX9RpS+PNX7HlSUg3A0xnmPJzhN968zn0HrHKtDy+YX5pq34zvG+c/3X4etU4fZvRHbzlj3K6L790NUGBM0SUMm7uZ+wR1oBstgL6HZuYF6tGwtnVPodNBRZGLWVLv/AHiKav46zFLYklldDIkR7mxVkiCa9HT60Vq4bbWXHqS/YnQfbwbacPzEFaf0nZ+ZgLS3XqeQ7HXEDookx6dOg5OGUnN0d98VkdRd8r3M8ScnUPgrDNoXk5kBw+dzAuGT5RVsrDdWnAmpTeYss3blX7LfcqoUpnlfoVOfG4XHAKouKYgbMABKfRLCjWRBKud8SvnGgsC2ihxd5m+boPSFYD8VRUUoHzce0W5PYB+7pCI+Dio9da57N6hTUoSOstRdO6zl+5NCcrRDhgxGpJH8gIil0aZvvg8MibhBt14iBiMtOxvFk59H3149oUrpAnV6mhAyWzr3cpynjLgtkCwI8yP68U9AmZgAdbeuiMtu/RWxa0B/6EeNglQqKyvRq6cBbQIfYUwmE7937x8hn+92u3mbzRbYNpaV8evWrefbirA/QnRRWFQqvYZXQ1lqXt56TJz4dKthuiWs9LzFYqlBFSV6CXQbkEW3BG1F2AUpLS2FgzJLe10dzNVmDKXbdZ3uyvzF/4n89l+E/F5GhCyICFkQEbIgImRBRMiCiJAFEcEECc/kvPaBlQlihIwfYTbEYcj4KWKCFEDGT4F/egibPCT/926gU5RvrtmPkFnCtJCnmDXRNMXMN03zC3RcvvBPVZWnqbY2TdW3YyQ6Vl5ihHcicyA5DUrdfWYzBh1DFCOVMeL5//LHEES0eHPnO3Eg2qejZX0a2JIYIcF7P6iyhL++YR+DYR+FMfxXf0N+WcI3fXInB96ZnAZcH5/c2UFlbaif3PkXtcpBh2cHbpcAAAAASUVORK5CYII=";


const fur = [
	{ id: 0, title: 'IKEA', img: IKEA },
	{ id: 1, title: 'H & M', img: HM },
	{ id: 2, title: 'Redbus', img: REDBUS },
	{ id: 3, title: 'Amazon', img: AMAZON },
];

const searchModal = props => {    
    return (
        <Modal animationType ="fade" transparent = {false}
            visible = { props.modalVisible }
        >
            <View style={ styles.modal }>
                <TouchableOpacity onPress={ () => props.toggleModal(false) } style={ styles.modal__close }>
                    <Image source={{ uri: CLOSE }} style={ styles.imgResponsive }/>
                </TouchableOpacity>
                <View style={ styles.search }>
                    <View style={ styles.search__wrapper }>
                        <View style={ styles.search__icon }>
							<Image source={{ uri: SEARCH }} style = { styles.imgResponsive } />
						</View>
                        <View style={ styles.search__input }>
                            <TextInput
                                style={ styles.search__text_input }
                                placeholder="Search"
                                placeholderTextColor="#BABABA"
                                onChangeText={ props.handleChange }
                                value={ props.searchValue }
                            />
                        </View>
                    </View>
                </View>
                {
                    props.searchValue.length > 0 ?
                        <ScrollView>
                            <View style={ styles.row }>
                                {
                                    fur.map(f => {
                                        return (
                                            <TouchableOpacity key={ f.id } style={ styles.column }>
                                                <View style={ styles.deal__icon }>
                                                    {/* Put Image path here */}
                                                    {/* <Image source={{ uri: deal.img }} style = {{ height: '100%', width: '100%', resizeMode : 'contain' }} /> */}
                                                    <Image source={{ uri: f.img }} style = {{ flex: 1, height: '100%', width: '100%', resizeMode : 'contain' }} />
                                                </View>
                                                <View style={ styles.deal__title }>
                                                    <Text style={ styles.deal__text }>
                                                        { f.title }
                                                    </Text>
                                                </View>
                                            </TouchableOpacity>
                                        );
                                    })
                                }
                            </View>
                        </ScrollView>
                        :
                        null
                }
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        flex: 1
    },
    modal__close: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 15,
        height: 15
    },
    search: {
        paddingHorizontal: 15,
        paddingTop: 80
    },
    search__wrapper: {
        flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
        backgroundColor: '#F5F5F5',
        width: '100%',
        height: 50,
        borderRadius: 16,
        paddingLeft: 24
    },
    search__icon: {
		width: 12,
		height: 12,
    },
    search__input: {
        width: '100%',
        height: 50,
        paddingLeft: 10
    },
    search__text_input: {
        width: '100%',
        height: '100%',
        color: "#000000",
        fontSize: 16
    },
    imgResponsive: {
        height: '100%',
        width: '100%', 
        resizeMode : 'contain'
    },
    row: {
		display: 'flex',
		flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 24
	},
	column: {
		width: '25%',
		alignItems: 'center'
    },
    deal__icon: {
		width: 68,
		height: 68,
	},
	deal__title: {
		paddingBottom: 24,
		paddingTop: 8
	},
	deal__text: {
		fontSize: 12
	}
});

export default searchModal;
