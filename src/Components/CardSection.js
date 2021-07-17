import { React, useState, useEffect } from 'react';
import Card from './Card'

const images = [
                {mango: [ 
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJdQskWxy2E9QYwYQF7-7l7GyedgwKz1jw3ZCCv7oo4RSRFAudlhL0_tbyNuqIMPIkjk&usqp=CAU",
                            "https://superclick.mx/content/images/thumbs/5f56bbee75d1572ab6d33b58_1uQ_4okpm3Ox1ZVwCVqj0Hv2cOq-5aLHM_550.png",
                            "https://www.eluniverso.com/resizer/yKN4TdNiNh5Q9Hcg933yWZVcF4A=/892x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/Q2OAELRV4FAPTGDUIDGPZZ253Q.jpg"
                          ]
                },
                {orange: [
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ElBK-s3mDUKCvuo4naP191o92qERwIDYJg&usqp=CAU",
                            "https://sc04.alicdn.com/kf/U3f818dc61b164bd3996575580efd2b4b6.jpg",
                            "data:image/jpeg;base64,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",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXrvJFS7bSLGWH5JWAmdVCUdYZPayANG8hufTVYoG_D4q_lteH5EhuEG11DDeCQwER9I0&usqp=CAU"
                          ]
                },
                {guava: [
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbbftUihYXqtsuhbrGrPnjFpUSZA1EBaoeXboSIZPsCgWzi6auEjPrZLgrlB9NTctzWf0&usqp=CAU",
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ejn0fGILJFD6a-FCHYysFKbS4-rhg3UHWcSiSG1PI0nHLoCV_b1RKrEBWxFHsXz_RQY&usqp=CAU"
                          ]
                }
              ]

const CardSection = () => {

  const [orange, setOrange] = useState(images[1].orange), 
        [mango, setMango] = useState(images[0].mango),
        [guava, setGuava] = useState(images[2].guava)
  
  useEffect(() => {
    const orangeList = selectImage("orange"),
          mangoList = selectImage("mango"),
          guavaList = selectImage("guava")
    
    displayFruit(orangeList, 5000, setOrange)
    displayFruit(mangoList, 6000, setMango)
    displayFruit(guavaList, 7000, setGuava) 
  }, [])

  
  const displayFruit = (fruits, time, callback) => {
    setInterval(() => {
      const index = Math.floor(Math.random() * fruits.length);
      callback(fruits[index])
      
    }, time)
  }
  

  const selectImage = (fruit) => {
    const img = images.filter((value, index) => 
      value.hasOwnProperty(fruit)
    )
    
    return Object.values(img[0])[0]
  }


  return (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
            <Card 
              cardTitle="Orange" 
              cardDescription="There are many variations of passages of Lorem 
                              Ipsum available, but the majority have suffered 
                              alteration in some form, by injected humour, or 
                              randomised words which don't look even slightly 
                              believable."
              cardImage={orange}
              buttonText="Pear"
            />
            <Card 
                cardTitle="Guava" 
                cardDescription="There are many variations of passages of Lorem 
                                Ipsum available, but the majority have suffered 
                                alteration in some form, by injected humour, or 
                                randomised words which don't look even slightly 
                                believable."
                cardImage={guava}
                buttonText="Apple"
            />
            <Card 
                cardTitle="Mango" 
                cardDescription="There are many variations of passages of Lorem 
                                Ipsum available, but the majority have suffered 
                                alteration in some form, by injected humour, or 
                                randomised words which don't look even slightly 
                                believable."
                cardImage={mango}
                buttonText="Pineapple"/>
        </div>
      </div>
    </section>
  )
}

export default CardSection;