import React, { useState } from 'react'

const WithdrawModel = ({onClose}) => {
    const [amount, setAmount] = useState("")
    const [account, setAccount] = useState([
        {type: "text", name: "Account Holder Name", value: ""},
        {type: "text", name: "Bank Name", value: ""},
        {type: "number", name: "Account Number", value: ""},
        {type: "text", name: "Account Type", value: ""},
        {type: "text", name: "SWIFT", value: ""},
        {type: "text", name: "Branch", value: ""}
    ])

    const handleSubmission =async(e)=>{
        e.preventDefault();

    }
  return (
    <div className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-100 flex items-center justify-center sm:p-4'>
      <div className="bg-white sm:rounded-lg shadow-2xl w-full max-w-lg h-screen sm:h-auto flex flex-col">
        {/* Header */}
        <div className='bg-gradient-to-r from-indigo-600 to-indigo-400 text-white p-4 sm:rounded-t-lg flex items-center justify-between'>
            <div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default WithdrawModel
