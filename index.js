const data = [
    {
        title:"Manjolai Forest",
        location:"📌 Tiruneveli",
        googleMapsUrl:"🗺️ https://goo.gl/maps/mN5enrdcsz1hWFNT8",
        startDate:"📆 3 June, 2018 -",
        endDate:" 5 June, 2018",
        description:"The scenic location set deep into the dense woods of Western Ghat Ranges in the Kalakkad Mundanthurai Tiger Reserve Area. This unexplored region lies in the Tirunelveli district of the South Indian state Tamil Nadu. Situated at an altitude of 1160meters above the sea level, Manjolai hills still remains an unexplored region with a mystical beauty.",
        imageUrl:"./Manjolai.png"
    },
    {
        title:"Vandaloor Zoo",
        location:"📌 Chennai",
        googleMapsUrl:"🗺️ https://goo.gl/maps/t4DhN25uMGjj2ojr5",
        startDate:"📆 25 Mar, 2018 ",
        endDate:"",
        description:"Arignar Anna Zoological Park is one of the modern and scientifically managed zoos spread over an area of 602 hectares (1,490 acres), including a 92.45-hectare (228.4-acre) rescue and rehabilitation centre, the park is the largest zoological park of the country located at Vandalur, Chennai (12.8797°N, 80.08167°E). This zoos has attained excellence as a dynamic nature conservation centre by promoting breeding programme of rare and endangered species of the Western and Eastern Ghats.",
        imageUrl:"./vandaloor-zoo.png"
    },
    {
        title:"Queensland Amusement Park",
        location:"📌 Kanchipuram",
        googleMapsUrl:"🗺️ https://goo.gl/maps/fTEudq7wqyKVd64d8",
        startDate:"📆 13 Sep, 2012",
        endDate:"",
        description:"Queensland is an action-packed world of rides, slides and other exciting activities that includes fifty one rides. There are thirty three rides for adults and eighteen rides for children. Water rides are open from 2:00 PM to 5:00 PM. It also holds swimming pools for women and men.",
        imageUrl:"./queensland.png"
    }
]


function Main(props) {
    return(
        <div className="main">
            <img src={props.imageUrl} className="img"/>
            <div className="container">
                <h5>{props.location} <span><a href={props.googleMapsUrl}>View on Google Maps</a></span></h5>
                <h1>{props.title}</h1>
                <h4><span>{props.startDate}</span><span>{props.endDate}</span></h4>
                <p>{props.description}</p>
            </div>
            
        </div>)
}


function Header() {
    return(
        <div className="header">
            <p>🌐 my travel journal</p>
        </div>)
}

function App() {
    const places = data.map( item => {
        return(
            <Main 
                {...item}
            />
        )
    })

    return(
        <div className="App">
            <Header />
            <section className="places-list">
                {places}
            </section>
        </div>
    )
}

ReactDOM.render(App(), document.getElementById("root"))
