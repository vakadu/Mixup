import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';

import SearchModal from './serachModal';
import PopupModal from './popup';

const HOME = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADKSURBVHgB7dTBDYJAEIXhN6vetQMSPSsVKFZgC5RgB9qBsQJL0A4wNiB3L3RgBTLuEEhIBHeFlRP/aWA3X+a0BMtm8+WOicIX0TqJr4npPsEiQUG0l5mBxAY3who9aHRb/meDf4Wni9VJXwirzkw4NUFt8A/Y84PxkPmsxwAW1eFUgUZ69PFDVTi1RetwlaPegPneFM03FCMSK/vO0UgO4KBic+USlYrNlUu0jCv8qR7u4Y7hC9wXZ6+bvBcjpBtOMUHLSOH5iG/HN07lYpib+pugAAAAAElFTkSuQmCC";
const BOOKMARK = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD2SURBVHgB7ZWvC8JQFIWPP3AgDASbICwZBBE0mTSZ/HNNBrEtiMlm0qLJpMWB4D3sPBRRx+biDnwM9rbv3vfCfSU84xlNpM9FoKQXI6OH7NkaYfVFtDOOSJ+W/o8o6xgHY4VsYRM+hWXEZ3XDf+GZ1crIMYWskBWypHAqTPX8mWrC+lAwgbERqWQcKWN1c5SgJ3FgLKDpmiQLJOJoChFPUeb00ulMBXbfZPx5oA5YdW6c3wo5AWUTxHdG6BYrqhQZfaOtTpb4sA0lkrBudBFPat4lvpP5+nCt6nf8Dtf3KhgYDbdNjuwrvhxqQtghz3LmXnjIJ94DvdAwZI6SV38AAAAASUVORK5CYII=";

const TAB = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAYAAAAPtVbGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAESSURBVHgB7ZXLDcIwEEQHxJ2UEDoINACiAjqBCvg1wKcSKoAO+DRA3AFUAOziQeKyjhwFxIGRnmIla0+8Xq0BIBEmwkW4lyAXxgioJiyEkXAVHJ8x6tFsLkytoNcOUpRTm/P3oSAN2KG8NBuasrMVUMcX1Ah804IYChnHIaXwZ/mekZOwhD9nM105ylXbO5rCxErXgH/nhBZ83mPoCEeukdUD21fNaBSrg7Dm2DQpOoMYJV+prr/J75qk+KDUxNFE233GcZUl/OxdK/g7ZYEPSU20iW3gd9Lk+4xUZqJyNHlpWqWJVV2xV3BI9yKTLopldeIevx9qxkStrpxPh/hOnBJdox8K1DPRy8y6kG4FbLkGHofGW6YuO0iDAAAAAElFTkSuQmCC";
const SEARCH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADGSURBVHgBrZIxC8IwEIWvVWjBoaBDh0JFBEVHoYP//zfo7uDg4ODQIVjB9+iBSUgbER98NFzy7i65JvJRDiow13UH7uACjIxoBo6gBpmVrAQNWA4Zcz2wiOwXoc2NMiYaD34w1Y1rxPyQ/jqZb2ZbrcTV6lnH3PkZBzTxA6lmLCNGVpxK375j5hyrSHU+6C3UitEka/AS9/6c/w6swAk8bXNirdl6rWujnbBVToJ/2h6cJfK4rFbo1483gfjX+l+CRH4TE2zfSykakTTaMmQAAAAASUVORK5CYII=";
const AMAZON = "data:image/png;base64,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";
const IKEA = "data:image/png;base64,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";
const HM = "data:image/png;base64,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";
const REDBUS = "data:image/png;base64,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";
const SNAPDEAL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVNSURBVHgB7Zx7aFtVHMe/5yS3z3R9rG7VVkkFHSrM9o+K9UE73dTh0GyCMCaO/emY2DnmhA7a6v7wxbYiDp2vzs03OmUo0g0XQYUJuk6Qocga3UaftkmTmDY3ucdzkiaudzfr7eNc2uR+oCT3/s69yfn2nN/5nXPzOwQm6UVzmYICD0G8iYHUAcwNkDIsSJiffzcfAeuhIN5xRL+shddv5koyXYE+POCOId7CC25euAJMDxeni8LRcTW+8V25XAaSLSKvjb9tQXaxvwbd2zMZDQVJtgrtJDe6kYUwwOcEXWXUWqj+xAWsqctmMQSibqKOoq4Gtv/J9pahx6ilpAURPsOJvNO5IkYKIUoM0frUKJTuMsKB5poYAlHnycEjdZzsKnFovchhHKC1ouskWoiKWDtyHBFriVcyGW+MwsavIlpLFSge2AjKHFwLqoE1wyYB9yNNlE9+boVNAgZWJ5yqGzYp3HQxz2AlUEZhMwVbEB22IDpsQXTYguiwBdHhhMXkPXgb8uquByqWgBbmQ1NVsSaRQEy9HcWFUIf8/IsRaKEIIh98i3jvAKzCMkFI5RKw4TE4rluG0j1bTF9XtHk1hu56GmwwACuwpMs43Mtx1U+vglQvRaSrG6rP/H9cuaEGrmcehVVYIkjxUx4otVUo7XwCiEQRaH13RteXtGwAWVENK5AuCCstRuFj9ybeFz9yN/KaVmLiQy/Cx382fQ/ioKg4vAuMTPtcbc5IF6ToodvhrCxNH5e+w58RFSgI7nwTLBYzfZ+ChhXIX98I2ZALuI9BIpU/7kN+481Tzvl3vYXwS59CuacOyk3XgroKQPiII6BLiuHavsHwXupfAxiq3wo2GoIspAqirKnHsu4XLjuvjYxhoGEbtHPGzrX86z0oWttgaAu8+AlCz74NWUjtMq5J33HZh/IYxLV7U8brxnYehDYWNrSVbF0Hcs1SyEKeIOUlKNi4KqO5ZMv9UO68xdAW/+1vhDqPGtpoSRHKDmyDLKQJUryxGVS5ctxX+vqTYPmKoS30ymeInesztBU9fAfojTWQgTQfsrz3EJzuqmnLjex4A5G9nxsb+TBLudNlfFQik0Mu0fjKZyDM/U8/ZCAldFeaV5oSQ1DGfUn01FnEgxFDu8b/HFwMh6sQUT7KkDh/TpCh7HwgRZD81fWmy9JyF6q+34+ZoEUm0F+zCWwkiPlGig9RT5yGTAIiqJMghkCKIBPeXxH+2AsZBA8cw7+vHYMspI0yY23vganmQ3MzjJ/5E8GOI5CJNEG03y8i+NFJzBdxfwh+z3N8XcTUrytnjdRINdzahfjw3CvAGMPgut2I++SvnEkVRDs/jNC+o5grweffh/bDWViB9Ol/aC+POPv+wWwJHTmBYNthWIX8FbNxFSOPv4zZEPf1I7DjIKzEkiVEEZeEvzo1o2vi54cwuLYVsGhxOYX0BaL0B1VVoMDTCGd1JZ8Ju+DkofilaHz1TOPrrax/FIyPKJHjv0D74yKsxjJBFgv2kzsdtiA6bEF02ILosAXRYQuigyYT9mwm8YsW4oNNCh/VQM7AJgEB6aEUzAubBEILqkL9wvYjSUTCMxW5Znwycwg5Du8uXUKLxLDrhGNmD0ayEArSkXzliFwz/oCwEzmKqHsqVTUdmMWgtrMcHIKTaapqe+o4LYjoPyKpN5dESSUyX7pzxJTQXTQbArY+F0QRdRR11ef/25sh6DCc3ImCIv07Gx2tqJOoW6Z9RExtqKJCa6eJDVUWKywRa4nwYtYbquhJJjwrHj73aeYhrsjkdC/sLXeEj0APF+I7EY2b3XLnP8dVy4qJrFvNAAAAAElFTkSuQmCC";
const TARGET = "data:image/png;base64,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";
const NIKE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABECAYAAAA4E5OyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP7SURBVHgB7Zw7SyNRFMdPBC1EMYqoIMikEKzctRARFeMbxMKAX8BGEAu3sfOxFlqomM0XcLOijdUKglZqBK3UdcHOwil8gUWChU/w7LmTTDR3o2YmMc/zg7+BmJDcX+5jbiZnLBAhiGilm15KM+UrRaFYITnxUVTKEWWbsmqxWHwQC0iEQvlB8WJq85OigFnoyVaKE9MP53vttrwhQ6GbLfAPi3REpbTQMFLlf2TJd5AMMT+kswyBQtkKtDWEkB6SAT1DRgWppwSFoH8V+QOZI0NHpdToq9DrITMBmSdDoIC/7RpaDwkMlVPIbGxi6Og95Dsw38QfS2Du8AIj5hCb6CG9wAi0rYkQYgdGp1kI+QKMzlcxh4j5I1l3rfHGJ4QgMEGygAmBhUiwEAkWIsFCJFiIBAuRYCESLESChUjERIiqqnB8fAzJwvn5OWxsbMDl5SUY3ZlEvZe5urqC/v5+WF9fh0Rxd3cH+/v7sLOzAzc3N1BZWQl9fX1gtZrYs2IUPD8/Y11dHS4vL2O8ubi4wJmZGWxvb8f8/Hzs6OhAj8eD0RKVkNHRUdG78OzsDD8bGga4sLCAg4ODqCiK9rrUA3B4eBgPDw8xVpgWcnBwoL2p0tJS/AxoGODu7i5OTk6i3W7XXktPSUkJTkxM4PX1NcYaU0IeHx+DnxKNV4wVNB/h3NwcdnZ2asPgtQSR6upqXF1dxaenJ/wsTAmZnZ0Nvsm8vDy8vb1FM4h5YGlpCYeGhtBms/0nQCQ3Nxd7enpwc3MT44FhIbTEYlFRUcibnp+fj+i59/f3uLe3h1NTU1hbWxtWgJ6CggIcGBjQXi+eGBbicrnCNmB8fDzs409OTnB6elpbDUQj35MgUlFRgU6nE73exPw+x7CQpqamNxtTWFiIbW1t6HA4sLW1FcvKyj4UoEdMnCsrK/jw8ICJxLAQMWdE2siPQudSsaurK6bLZrQYFpKdnR21iOLiYm2IiUk12TAsRF9uzaSqqko7ukzU/BAJhoWMjY0ZFtHY2Ihra2vaoX6yY1iI+HTFviGSYTEyMoK04cJUwtRulw7EYHFxEdxuN9CyCvTJQ05ODpSXl0N9fT00NDRAd3e3ud1mguFTmRL8jZkEC5FgIRIsRIKFSLAQCRYiwUIkWIgEC5EQQmJTnJce+IQQFRgdrRriLzA6R0LINjA623p5yCnwz7sFhVmBWrNfwLiFCy4xe+GlxCxQpumCzMWll6pymepbZaqBO1ogs45LVPAXMgcPTkMO3QPdxgGZIUWlOOT6f74YgkTYzV3ggTWQnhOtaFNNOBkRgf4LqrgxtREnk8VFYZSP2muBCMGXS+7YwV/JqUBqXHLHQ/kd6SV3/gHh4df8dbQjJwAAAABJRU5ErkJggg==";
const MYNTRA = "data:image/png;base64,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";

const bottomTabs = [
	{ id: 0, title: 'Home', img: HOME },
	{ id: 1, title: 'Bookmark', img: BOOKMARK },
	{ id: 2, title: 'Compare', img: SEARCH },
	{ id: 3, title: 'Deals', img: BOOKMARK },
];

const furniture = [
	{ id: 0, title: 'IKEA', img: IKEA },
	{ id: 1, title: 'H & M', img: HM },
	{ id: 2, title: 'Redbus', img: REDBUS },
	{ id: 3, title: 'Amazon', img: AMAZON },
	{ id: 4, title: 'Snapdeal', img: SNAPDEAL },
	{ id: 5, title: 'Target', img: TARGET },
	{ id: 6, title: 'Nike', img: NIKE },
	{ id: 7, title: 'Myntra', img: MYNTRA },
];

const fur = [
	{ id: 0, title: 'IKEA', img: IKEA },
	{ id: 1, title: 'H & M', img: HM },
	{ id: 2, title: 'Redbus', img: REDBUS },
	{ id: 3, title: 'Amazon', img: AMAZON },
];

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			modalVisible: false,
			searchValue: '',
			popup: true
		}
	}

	toggleModal = visible => {
		this.setState({ modalVisible: visible });
	};

	popupShow = () => {
		this.setState({ popup: !this.state.popup });
	};

	handleChange = (value) => {
		this.setState({ searchValue: value });
	};

	render(){
		return (
			<View style={ styles.container }>
				<SearchModal
					{ ...this.state }
					toggleModal={ this.toggleModal }
					handleChange={ this.handleChange }
				/>
				<PopupModal
					{ ...this.state }
					popupShow={ this.popupShow }
				/>
				<ScrollView>
				<View style={ styles.header }>
					<View style={ styles.header__left }>
						<Text style={ styles.header__text }>
							Home
						</Text>
					</View>
					<TouchableOpacity style={ styles.header__right }>
						<Image source={{ uri: TAB }} style = {{height: 24, width: 24, resizeMode : 'contain',}} />
						<Text style={ styles.tab__text }>
							3
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={ () => this.toggleModal(true) } style={ styles.search }>
					{/* <TextInput
						style={ styles.input }
						placeholder="Search"
						onChangeText = { () => this.toggleModal(true) }
					/> */}
					<View style={ styles.search__wrapper }>
						<View style={ styles.search__icon }>
							<Image source={{ uri: SEARCH }} style = {{ height: '100%', width: '100%', resizeMode : 'contain' }} />
						</View>
						<View style={ styles.search__text }>
							<Text style={ styles.search__text__text }>
								Search
							</Text>
						</View>
					</View>
				</TouchableOpacity>
				<View style={ styles.deal }>
					<View style={ styles.deal__header }>
						<Text style={ styles.deal__header__text }>
							Furniture
						</Text>
					</View>
					<View style={ styles.row }>
						{
							furniture.map(deal => {
								return (
									<TouchableOpacity key={ deal.id } style={ styles.column }>
										<View style={ styles.deal__icon }>
											{/* Put Image path here */}
											{/* <Image source={{ uri: deal.img }} style = {{ height: '100%', width: '100%', resizeMode : 'contain' }} /> */}
											<Image source={{ uri: deal.img }} style = {{ flex: 1, height: '100%', width: '100%', resizeMode : 'contain' }} />
										</View>
										<View style={ styles.deal__title }>
											<Text style={ styles.deal__text }>
												{ deal.title }
											</Text>
										</View>
									</TouchableOpacity>
								);
							})
						}
					</View>
				</View>
				<View style={ styles.deal }>
					<View style={ styles.deal__header }>
						<Text style={ styles.deal__header__text }>
							Fashin
						</Text>
					</View>
					<View style={ styles.row }>
						{
							fur.map(deal => {
								return (
									<TouchableOpacity key={ deal.id }  style={ styles.column }>
										<View style={ styles.deal__icon }>
												{/* Put Image path here */}
												{/* <Image source={{ uri: deal.img }} style = {{ height: '100%', width: '100%', resizeMode : 'contain' }} /> */}
												<Image source={{ uri: deal.img }} style = {{ flex: 1, height: '100%', width: '100%', resizeMode : 'contain' }} />
											</View>
											<View style={ styles.deal__title }>
												<Text style={ styles.deal__text }>
													{ deal.title }
												</Text>
											</View>
									</TouchableOpacity>
								);
							})
						}
					</View>
				</View>
				<View style={ styles.deal }>
					<View style={ styles.deal__header }>
						<Text style={ styles.deal__header__text }>
							Furniture
						</Text>
					</View>
					<View style={ styles.row }>
						{
							furniture.map(deal => {
								return (
									<TouchableOpacity key={ deal.id } style={ styles.column }>
										<View style={ styles.deal__icon }>
											{/* Put Image path here */}
											{/* <Image source={{ uri: deal.img }} style = {{ height: '100%', width: '100%', resizeMode : 'contain' }} /> */}
											<Image source={{ uri: deal.img }} style = {{ flex: 1, height: '100%', width: '100%', resizeMode : 'contain' }} />
										</View>
										<View style={ styles.deal__title }>
											<Text style={ styles.deal__text }>
												{ deal.title }
											</Text>
										</View>
									</TouchableOpacity>
								);
							})
						}
					</View>
				</View>
				</ScrollView>
				<View style={ styles.bottomBar }>
					{
						bottomTabs.map(tab => {
							return (
								<View key={ tab.id } style={ styles.bottom__icon }>
									<Image source={{ uri: tab.img }} style={{ width: 22, height: 22, resizeMode: 'contain' }}/>
									<Text style={ styles.bottom__title }>
										{ tab.title }
									</Text>
								</View>
							);
						})
					}
				</View>
			</View>
		);
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FFF',
	},
	bottomBar: {
		height: 80,
		backgroundColor: 'rgb(255, 255, 255)',
		opacity: 0.7,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		paddingHorizontal: 52
	},
	bottom__icon: {
		width: '25%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	bottom__title: {
		fontSize: 10,
		color: '#242F3F',
		paddingTop: 3.5
	},
	header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginHorizontal: 20,
		paddingTop: 30
	},
	header__left: {
		flex: 0.5,
		justifyContent: 'center',
	},
	header__right: {
		flex: 0.5,
		justifyContent: 'center',
		alignItems: 'flex-end'
	},
	header__text: {
		fontSize: 34,
		fontWeight: "600"
	},
	tab__text: {
		position: 'absolute',
		top: 18,
		right: 6,
		fontSize: 11
	},
	search: {
		paddingHorizontal: 20,
		marginTop: 16,
		marginBottom: 24,
		position: 'relative'
	},
	search__wrapper: {
		backgroundColor: '#F5F5F5',
		width: '100%',
		height: 50,
		borderRadius: 16,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingLeft: 24
	},
	search__icon: {
		width: 12,
		height: 12,
	},
	search__text: {
		paddingLeft: 10,
	},
	search__text__text: {
		fontSize: 16,
		fontWeight: '500',
		color: '#BABABA'
	},
	deal: {
		backgroundColor: '#F9F9F9',
		marginBottom: 20,
		marginHorizontal: 21,
		paddingTop: 20,
		paddingBottom: 8,
		paddingHorizontal: 16,
		borderRadius: 32,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.20,
		shadowRadius: 1.41,
		elevation: 2,
	},
	deal__header: {
		paddingBottom: 24
	},
	deal__header__text: {
		fontWeight: '600',
		fontSize: 18
	},
	row: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
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

export default App;