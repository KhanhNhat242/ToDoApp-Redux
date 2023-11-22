import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { store } from '../redux/Store'
import { actionAdd, actionDelete, actionUpdate } from '../redux/Actions'

const Home = () => {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState([])
    const [flag, setFlag] = useState(false)

    const handleAddJob = () => {
        if(!flag){
            store.dispatch(actionAdd(job))
            
            setJobs(store.getState())
            setJob('')
        }
    }

    const handleDeleteJob = (i) => {
        store.dispatch(actionDelete(i))

        setJobs(store.getState())
    }

    const handleUpdateJob = (i, job) => {
        store.dispatch(actionUpdate({
            index: i, 
            job: job,
        }))
        
        setJobs(store.getState())
    }

    return (
        <View style={styles.wrapper}>
        <Text style={styles.title}>TO DO APP REDUX</Text>
        <View style={styles.inputWrapper}>
                <TextInput style={styles.input} value={job} onChangeText={setJob}/>
                <TouchableOpacity style={styles.addBtn} onPress={handleAddJob}>
                    <Text style={styles.addTxt}>ADD</Text>
                </TouchableOpacity>
        </View>
        <View style={styles.jobWrapper}>
            {jobs.length == 0 ? (<View></View>) : jobs.map((j, index) => {
                return (
                    <View style={styles.job} key={index}>
                        <Text style={styles.jobName}>{j}</Text>
                        <View style={styles.action}>
                            <Text style={[styles.edit, {display: `${flag ? 'none' : 'block' }`}]} onPress={() => {
                                setFlag(!flag)
                                setJob(j)
                            }}>Edit</Text>
                            <Text style={[styles.edit, {display: `${!flag ? 'none' : 'block' }`}]} onPress={() => {
                                handleUpdateJob(index, job)
                                setFlag(!flag)
                                setJob('')
                            }}>Update</Text>
                            <Text style={styles.delete} onPress={() => handleDeleteJob(index)}>X</Text>
                        </View>
                    </View>
                )
            })}
        </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 10,
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: 20,
        textAlign: 'center',
    },
    inputWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 30,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
    },
    addBtn: {
        width: '20%',
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
    },
    jobWrapper: {
        width: '100%',
        marginTop: 20,
    },
    job: {
        width: '100%',
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    action: {
        display: 'flex',
        flexDirection: 'row',
    },
    edit: {
        marginRight: 20,
    }
})