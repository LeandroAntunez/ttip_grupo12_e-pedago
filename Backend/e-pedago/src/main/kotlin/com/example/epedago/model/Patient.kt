package com.example.epedago.model

import java.time.LocalDate


class Patient {

    var patientId: Long = 0
    var name: String = ""
    var lastName: String = ""
    var dateBirth: LocalDate = LocalDate.now()
    var diagnosis : String = ""
    var preferedGames : MutableList<Game> = mutableListOf()



    constructor()
    constructor(patientId:Long, name:String, lastName:String,  date:LocalDate, diagnosis:String){
        this.patientId = patientId
        this.name = name
        this.lastName = lastName
        this.dateBirth = date
        this.diagnosis = diagnosis

    }

    fun getAge():Long {
        return 0 //TODO return age based on birth date
    }

}