package com.example.epedago.model

class Game {

    var id: Long = 0
    var name: String = ""
    var typeOfGame: String = ""
    var audience: String = ""



    constructor()
    constructor(gameId:Long, name:String, typeOfGame:String, audience:String){
        this.id = gameId
        this.name = name
        this.typeOfGame = typeOfGame
        this.audience = audience

    }


}