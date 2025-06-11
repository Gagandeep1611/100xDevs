import './App.css'

function App() {

  return (
    <>
     <CardWrapper>Hello World</CardWrapper>
     <CardWrapper>utinvriusncuwnriu niurn ienienvie nvien vin inrvienvie niene u
      n veunv einvei unv ine ivne irunvienvr us nls nv vlenrunvi niue nie nei neiu viuvnvi
      viunviunviurn eiu neiu nveivnei vnevnei nvn oeinvonr oenvoe nve
      n oenve onv oirenveonv env i ne nvint iunbtrun ei nin i niu nt
      n un otvneovneonoenviudntrnn
     </CardWrapper>
    </>
  )
}




function CardWrapper({children}){
  return (
    <div style={{border: "solid black 2px", padding: "10px", margin:"10px"}}>
    {children}
    </div>
  )
}
export default App
