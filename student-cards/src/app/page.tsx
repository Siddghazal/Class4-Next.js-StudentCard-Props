import React from 'react'
import Card from './component/card'

export default function card () {
  return (

    <div className="p-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Student ID Cards</h1>


      <Card Name='Faisal Siddiqui'RollNo='1234' Age='16' Class='9th grade'/><br/>
      <Card Name='Moiz Hussain' RollNo='2345' Age='17' Class='10th grade'/><br/>
      <Card Name='Afia Khan' RollNo='4567' Age='19' Class='11th grade'/>
    </div>
  )
}

