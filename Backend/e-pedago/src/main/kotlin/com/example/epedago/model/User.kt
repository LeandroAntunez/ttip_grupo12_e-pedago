package com.example.epedago.model

import javax.persistence.*
import kotlin.jvm.Transient

/**
 * Purchase represents the purchase of each user
 *
 * @param aName represents the name of the User.
 * @param aPassword represents the password
 * @param aMail represents the email of the user.
 */

@Entity
data class User(
        var name: String,
        var email: String,
        var password: String){
    constructor():this("", "", "")

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id:Long = 0
    var purchaseRange: Double = 0.0


    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (name != other.name) return false
        if (email != other.email) return false

        return true
    }



}


