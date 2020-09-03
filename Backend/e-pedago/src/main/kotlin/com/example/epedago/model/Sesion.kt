package com.example.epedago.model


import java.time.LocalTime

class Sesion(aGame:Game, aPatient:Patient, hourFrom:LocalTime, hourTo:LocalTime){

    var id: Long = 0
    var game: Game = aGame
    var startDate: LocalTime = hourFrom
    var endDate: LocalTime = hourTo
    var patient: Patient = aPatient
    var score: Long = 0




}