//import liraries
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import { colors } from '../../../components/colors';

import Svg, { Path } from 'react-native-svg';
import { useState } from 'react';
import Toggle from 'react-native-toggle-input'
import HorizontalCardList from '../../../components/main/pictureCarousel';
import MedicalDeviceCardList from '../../../components/main/medicalDeviceCardList';
import medicineOne from "../../../assets/Main/MedicineOne.png"
import medicineTwo from "../../../assets/Main/MedicineTwo.png"
import medicalDevice from "../../../assets/Main/MedicalDevice.png"
import communityOne from "../../../assets/Main/communityFeedOne.png"
import communityTwo from "../../../assets/Main//communityFeedTwon.png"
import amartemImage from "../../../assets/Main/amartemImage.png"
import NewsFeedComponent from '../../../components/main/NewsField';
import newsFeedTwo from "../../../assets/Main/newsFeedTwo.png"
import newsFeedOne from "../../../assets/Main/newsFeedOne.png"
import NewsFeedList from '../../../components/main/NewsFieldList';
// create a component
const Home = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const medicalList = [{ id: "1", price: "N5,000", imageSource: medicineOne, title: "Panadol (50mg) 200ta." }, { id: "2", price: "N15,000", imageSource: medicineTwo, title: "Toothache Soothe med" }, { id: "3", price: "N15,000", imageSource: medicineTwo, title: "Toothache Soothe med." }]

    const medicalDeviceList = [{ id: "1", price: "N5,000", imageSource: medicalDevice, title: "Temperature checker" }, { id: "2", price: "N15,000", imageSource: medicalDevice, title: "Statoscope" }, { id: "3", price: "N15,000", imageSource: medicalDevice, title: "Statoscope" }]
    const communityList = [{ id: "1", description: "How I had covid twice and survived", imageSource: communityOne, title: "@hasan" }, { id: "2", description: "Getting The Upper Hand On Asthma Allergy", imageSource: communityTwo, title: "@hasan" }]
    const newsFeedData = [
        {
            title: 'r/worldnews',
            description: 'Getting The Upper Hand On Asthma Allergy',
            imageSource: newsFeedOne,
            key: '1', // Unique key for the item
        },
        {
            title: 'r/worldnews',
            description: 'Skin Cancer Prevention 5 Ways To Protect Yourself',
            imageSource: newsFeedTwo,
            key: '2',
        },
        // Add more news feed items as needed
    ];
    return (
        <View style={styles.container}>
            {/* <StatusBar /> */}
            <SafeAreaView style={{ paddingVertical: 30, paddingHorizontal: 10, borderBlockColor: "red", borderWidth: 3, flex: 1, width: "100%" }}>
                <ScrollView>
                    {/* first component */}
                    <View style={{ width: "100%", height: 60, alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10, }}>
                        <Image source={require("../../../assets/Main/doctorprofileimage.png")} />
                        <View><Text style={{ fontSize: 18, fontFamily: 'Axiforma' }} >Welcome Dr,</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'GothamPro' }}>What do you want to</Text>
                            <Text style={{ fontSize: 10, fontFamily: 'GothamPro' }}> do today?</Text>
                        </View>
                        <View style={{ borderColor: 'rgba(43, 43, 43, 0.05)', borderWidth: 2, width: 50, justifyContent: 'center', alignItems: "center", padding: 12, height: 50, borderRadius: 50 }}>
                            <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" >
                                <Path
                                    d="M12.5005 22C13.6005 22 14.5005 21.1 14.5005 20V19L10.5005 19.0005L10.5005 20C10.5005 20.5304 10.7113 21.0391 11.0863 21.4142C11.4614 21.7893 11.9701 22 12.5005 22ZM18.5005 16V11C18.5005 7.93 16.8605 5.36 14.0005 4.68V4C14.0005 3.17 13.3305 2.5 12.5005 2.5C11.6705 2.5 11.0005 3.17 11.0005 4V4.68C8.13054 5.36 6.50054 7.92 6.50054 11V16L5.21054 17.29C4.58054 17.92 5.02054 19 5.91054 19H19.0805C19.9705 19 20.4205 17.92 19.7905 17.29L18.5005 16Z"
                                    stroke="#1D1E25"
                                    strokeWidth={1.5}
                                />
                            </Svg>
                        </View>
                        <View style={{ borderColor: 'rgba(43, 43, 43, 0.05)', borderWidth: 2, width: 50, justifyContent: 'center', alignItems: "center", padding: 12, height: 50, borderRadius: 50 }}>
                            <Svg width={25} height={24} viewBox="0 0 25 24" fill="none">
                                <Path
                                    d="M6.19345 19L20.5 19M20.4995 12L2.5 12M20.5 5L12.5933 5"
                                    stroke="#2B2B2B"
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                />
                            </Svg>
                        </View>

                    </View>
                    {/* second  */}
                    <View style={{ height: 147, width: "100%", borderColor: "red", borderWidth: 3, marginBottom: 10, }}>


                    </View>
                    <View style={{ backgroundColor: toggle ? "rgba(122, 236, 83, 0.06)" : "rgb(255,240,240)", borderRadius: 12, height: 53, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10, paddingHorizontal: 15 }}>
                        <Text style={{ color: toggle ? "#159900" : "rgb(255,60,60)" }}>I am Available </Text>
                        <Toggle
                            color={"#4C956C"}
                            size={20}
                            filled={true}
                            circleColor={"white"}
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                    </View>
                    {/* third */}
                    <View style={{ marginBottom: 10, height: 55, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15, backgroundColor: "rgba(151, 151, 151, 0.11)", borderRadius: 13 }}>

                        <View style={{ height: 25, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row" }}>
                            <View>
                                <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <Path
                                        d="M8 2V5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M16 2V5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M3.5 9.08984H20.5"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M15.6937 13.7002H15.7027"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M15.6937 16.7002H15.7027"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M11.9945 13.7002H12.0035"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M11.9945 16.7002H12.0035"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M8.29529 13.7002H8.30427"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M8.29529 16.7002H8.30427"
                                        stroke="black"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            </View>
                            <Text style={{ fontSize: 12, fontFamily: "GothamPro", fontWeight: "400" }}>Schedule appointment calender</Text>
                            <View>
                                <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <Path
                                        d="M10.8213 4.44727L15.3738 8.99977L10.8213 13.5523"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <Path
                                        d="M2.62598 9H15.2485"
                                        stroke="black"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </Svg>
                            </View>
                        </View>
                    </View>
                    {/* fourth */}
                    <View style={{ height: 53, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, color: "#424242", fontFamily: "Axiforma" }}>Community Feed  </Text>
                        <Text style={{
                            color: "#6798E1"
                        }}>View all</Text>
                    </View>
                    <View style={{ height: 300, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                        <HorizontalCardList data={communityList} />

                    </View>
                    <View style={{ height: 53, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, color: "#424242", fontFamily: "Axiforma" }}>Shop for Medical Devices </Text>
                        <Text style={{
                            color: "#6798E1"
                        }}>View all</Text>
                    </View>
                    {/* <View style={{ height: 190, width: "100%", borderColor: "green", borderWidth: 3, alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}> */}
                    <MedicalDeviceCardList data={medicalDeviceList} />

                    {/* </View> */}
                    <View style={{ height: 53, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                        <Text style={{ fontSize: 16, color: "#424242", fontFamily: "Axiforma" }}>Shop for medicines </Text>
                        <Text style={{
                            color: "#6798E1"
                        }}>View all</Text>
                    </View>
                    <View style={{ height: 190, width: "100%", alignItems: 'center', justifyContent: "space-between", flexDirection: "row", marginBottom: 10 }}>
                        <MedicalDeviceCardList data={medicalList} />

                    </View>
                    {/* amartem */}
                    <View style={{ height: 329, backgroundColor: "#4425F5", width: "100%", justifyContent: "space-between", marginBottom: 10, borderRadius: 18, padding: 20 }}>
                        <View>


                            <View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row", paddingVertical: 3 }}>
                                <Text style={{ color: colors.white, fontFamily: "GothamPro", fontSize: 26, width: "50%" }} >Amartem 2201</Text>
                                <View>
                                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <View >
                                            <Svg width={14} height={14} viewBox="0 0 15 14" fill="none">
                                                <Path d="M3.00391 5.25H4.17057V1.75H5.33724L7.33224 5.25H10.0039V1.75H11.1706V5.25H12.3372V6.41667H11.1706V7.58333H12.3372V8.75H11.1706V12.25H10.0039L8.00307 8.75H5.33724V12.25H4.17057V8.75H3.00391V7.58333H4.17057V6.41667H3.00391V5.25ZM5.33724 5.25H5.99641L5.33724 4.10083V5.25ZM5.33724 6.41667V7.58333H7.33224L6.66724 6.41667H5.33724ZM10.0039 9.91667V8.75H9.33307L10.0039 9.91667ZM7.99724 6.41667L8.66807 7.58333H10.0039V6.41667H7.99724Z" fill="#F8F8F8" />
                                            </Svg>
                                        </View>
                                        <Text style={{ color: colors.white, fontFamily: "GothamPro", fontSize: 20, fontWeight: "700" }} >2,000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                        <View><Svg width={14} height={14} viewBox="0 0 15 14" fill="none">
                                            <Path d="M3.00391 5.25H4.17057V1.75H5.33724L7.33224 5.25H10.0039V1.75H11.1706V5.25H12.3372V6.41667H11.1706V7.58333H12.3372V8.75H11.1706V12.25H10.0039L8.00307 8.75H5.33724V12.25H4.17057V8.75H3.00391V7.58333H4.17057V6.41667H3.00391V5.25ZM5.33724 5.25H5.99641L5.33724 4.10083V5.25ZM5.33724 6.41667V7.58333H7.33224L6.66724 6.41667H5.33724ZM10.0039 9.91667V8.75H9.33307L10.0039 9.91667ZM7.99724 6.41667L8.66807 7.58333H10.0039V6.41667H7.99724Z" fill="#F8F8F8" />
                                        </Svg></View>
                                        <Text style={{ textDecorationLine: "line-through", color: colors.white, fontFamily: "GothamPro", fontSize: 13, fontWeight: "400" }} >12,000</Text>
                                    </View>

                                </View>
                            </View>
                            <Text style={{ width: "60%", color: colors.white, fontFamily: "GothamPro", fontSize: 12, fontWeight: "400" }} >For malaria and Fever
                                made for both.</Text>
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>

                            <Image source={amartemImage} />
                        </View>


                    </View>

                    {/* last component */}
                    <View>

                        <NewsFeedList data={newsFeedData} />
                    </View>



                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
});

//make this component available to the app
export default Home;
