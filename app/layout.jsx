import '@styles/global.css'
import '@Components/Navbar'
import '@Components/Provider'
import Navbar from '@Components/Navbar'
import Provider from '@Components/Provider'

export const metadata = {
    title:'promtophia',
    description:'again again'
}

const RootLayout = ({children}) => {
  return (
    <html lang='eng'>
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Navbar />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout;
