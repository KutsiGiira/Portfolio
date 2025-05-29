import { useState } from 'react'
import { Link } from 'react-router-dom'

function ChangePassword() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newPassword !== confirmPassword) {
      alert('New passwords do not match!')
      return
    }
    console.log('Password change attempt:', { oldPassword, newPassword, confirmPassword })
  }

return (
  <div className="w-screen h-screen flex items-center justify-center bg-white">
    <form onSubmit={handleSubmit} className="bg-white p-10 rounded-2xl w-full max-w-md shadow-2xl">
      <h2 className="text-2xl font-bold text-center mb-6">Change Password</h2>

      <div className="mb-4 text-left">
        <label htmlFor="oldPassword" className="block mb-2 text-gray-800 font-medium">
          Old Password
        </label>
        <input
          type="password"
          id="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-base"
        />
      </div>

      <div className="mb-4 text-left">
        <label htmlFor="newPassword" className="block mb-2 text-gray-800 font-medium">
          New Password
        </label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-base"
        />
      </div>

      <div className="mb-4 text-left">
        <label htmlFor="confirmPassword" className="block mb-2 text-gray-800 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded text-base"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-500 text-white rounded text-base font-medium hover:bg-indigo-600 transition duration-200 mb-3"
      >
        Change Password
      </button>

      <Link
        to="/"
        className="block text-indigo-500 hover:underline mt-2 text-center"
      >
        Back to Login
      </Link>
    </form>
  </div>
)
}
export default ChangePassword