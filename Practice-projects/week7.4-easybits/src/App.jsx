import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './Atoms'

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messagingAtomCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  return (
    <div>
      <button>Home</button>

      <button>My Network ({networkNotificationCount>=100 ? "99+" : {networkNotificationCount}})</button>
      <button>Jobs ({jobsNotificationCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationCount})</button>
      <button>Me ({totalNotificationCount})</button>
     </div>
  )
}
export default App
