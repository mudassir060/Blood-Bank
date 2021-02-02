import React, { useState, useEffect } from 'react';
import database from '@react-native-firebase/database';
import { StyleSheet, View, Image, Text, Button, ScrollView } from 'react-native';
import MyHeader from "../components/MyHeader";
import { connect } from "react-redux";
import { facebook_login } from "../reduxConfig/action";
import { TextInput } from 'react-native-paper';
import DatePicker from 'react-native-date-picker'

function BR_form(props) {
    const [Blood, setBlood] = React.useState('');
    const [location, setlocation] = React.useState('');
    const [date, setDate] = useState(new Date())
    const [name, setName] = useState('')
    const [gander, setGander] = useState("")
    const [relation, setRelation] = useState("")
    const [user, setUser] = useState({})
    const [phone, setPhone] = useState('')

    function SentRequest(props) {
        database().ref('/').child("Blood Request").push({
            user: user.name,
            Profile: user.picture.data.url,
            Blood: Blood,
            location: location,
            Date: date.toUTCString(),
            name: name,
            gander: gander,
            phone: phone,
            relation: relation,
        })
        // setBlood("")
        // setlocation("")
        // setDate("")
        // setPhone("")
        // setGander("")
        // setRelation("")
        // setUser("")
        alert("Your Blood Request Sent Successfully")
        // props.navigation.navigate("Facebookuth")
    }
    const [btnC1, setbtnC1] = React.useState("");
    const [btnC2, setbtnC2] = React.useState("");
    const [btnC3, setbtnC3] = React.useState("");
    const [btnC4, setbtnC4] = React.useState("");
    const [btnC5, setbtnC5] = React.useState("");
    const [btnC6, setbtnC6] = React.useState("");
    const [btnC7, setbtnC7] = React.useState("");
    const [btnC8, setbtnC8] = React.useState("");
    const [btnG1, setbtnG1] = React.useState("");
    const [btnG2, setbtnG2] = React.useState("");
    const [btnR1, setbtnR1] = React.useState("");
    const [btnR2, setbtnR2] = React.useState("");
    const [btnR3, setbtnR3] = React.useState("");
    useEffect(() => {
        if (typeof (props.user) != "undefined") {
            setUser(props.user)
        }
        if (Blood == 'A+') {
            setbtnC1("red")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'A-') {
            setbtnC1("")
            setbtnC2("red")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'B+') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("red")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'B-') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("red")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'O+') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("red")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'O-') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("red")
            setbtnC7("")
            setbtnC8("")
        } else if (Blood == 'AB+') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("red")
            setbtnC8("")
        } else if (Blood == 'AB-') {
            setbtnC1("")
            setbtnC2("")
            setbtnC3("")
            setbtnC4("")
            setbtnC5("")
            setbtnC6("")
            setbtnC7("")
            setbtnC8("red")
        }

        if (gander == 'Male') {
            setbtnG1("red")
            setbtnG2("")
        } else if (gander == 'Female') {
            setbtnG1("")
            setbtnG2("red")
        }

        if (relation == 'Family') {
            setbtnR1("red")
            setbtnR2("")
            setbtnR3("")
        } else if (relation == 'Friend') {
            setbtnR1("")
            setbtnR2("red")
            setbtnR3("")
        } else if (relation == 'Other') {
            setbtnR1("")
            setbtnR2("")
            setbtnR3("red")
        }

    })
    return (
        <View style={styles.container}>
            <ScrollView>
                {/* {date.toUTCString()} */}
                <MyHeader title="Request For Blood" />
                <View>
                    <Text style={styles.text}>Request For Blood whenever you need</Text>
                </View>
                <View>
                    <Text style={styles.text}>Choose Blood Group</Text>
                    <View>
                        <View style={styles.btn}>

                            <View style={styles.btnS}>
                                <Button value="A+" color={btnC1} onPress={() => setBlood('A+')} title=" A+ " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="A-" color={btnC2} onPress={() => setBlood('A-')} title=" A- " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="B+" color={btnC3} onPress={() => setBlood('B+')} title=" B+ " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="B-" color={btnC4} onPress={() => setBlood('B-')} title=" B- " />
                            </View>
                        </View>
                        <View style={styles.btn}>
                            <View style={styles.btnS}>
                                <Button value="O+" color={btnC5} onPress={() => setBlood('O+')} title=" O+ " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="O-" color={btnC6} onPress={() => setBlood('O-')} title=" O- " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="AB+" color={btnC7} onPress={() => setBlood('AB+')} title=" AB+ " />
                            </View>
                            <View style={styles.btnS}>
                                <Button value="AB-" color={btnC8} onPress={() => setBlood('AB-')} title=" AB- " />
                            </View>
                        </View>

                    </View>

                </View>
                <View>
                    <Text style={styles.text}>Date & Time</Text>
                    <View style={{ marginBottom: 8 }}>
                        <DatePicker
                            style={{ width: 360 }}
                            date={date}
                            color="red"
                            onDateChange={setDate}
                        />
                    </View>
                </View>

                <View>
                    {/* <Text style={styles.text}>Patient</Text> */}
                    <View style={styles.btn}>
                        <View style={styles.btnG}>
                            <Button value="Male" color={btnG1} onPress={() => setGander('Male')} title=" Male " />
                        </View>
                        <View style={styles.btnG}>
                            <Button value="Female" color={btnG2} onPress={() => setGander('Female')} title=" Female " />
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={styles.text}>Relation</Text>
                    <View style={styles.btn}>
                        <View style={styles.btnG}>
                            <Button value="Family" color={btnR1} onPress={() => setRelation('Family')} title=" Family " />
                        </View>
                        <View style={styles.btnG}>
                            <Button value="Friend" color={btnR2} onPress={() => setRelation('Friend')} title=" Friend " />
                        </View>
                        <View style={styles.btnG}>
                            <Button value="Other" color={btnR3} onPress={() => setRelation('Other')} title=" Other " />
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: 12, marginBottom:12 }}>
                    <TextInput
                        label="Patient Name"
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View>
                    {/* <Text style={styles.text}>Phone Number</Text> */}
                    <View style={{ marginTop: 12, marginBottom:12 }}>
                        <TextInput
                            label="Phone Number"
                            onChangeText={text => setPhone(text)}
                        />
                    </View>
                </View>
                <View>
                    {/* <Text style={styles.text}>Location</Text> */}
                    <View style={{ marginTop: 12, marginBottom:12 }}>
                        <TextInput
                            label="Location"
                            onChangeText={text1 => setlocation(text1)}
                        />
                    </View>
                </View>
                <Button onPress={SentRequest} title="Request For Blood" />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ecf0f1",

    },
    text: {
        margin: 6,
        marginBottom: 2,
        fontWeight: "bold"
    },
    btn: {
        flexDirection: 'row',
        margin: 2,
    },
    btnS: {
        margin: 4,
        marginBottom: 0,
        width: 80,
        fontWeight: "bold",
        fontSize: 15
    },
    btnG: {
        margin: 4,
    },

})

const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProp = (dispatch) => {
    return {
        inCerment: () => dispatch(InCerment()),
        facebook_login: () => dispatch(facebook_login()),
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(BR_form);
