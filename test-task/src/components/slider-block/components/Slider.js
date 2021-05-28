import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import { SliderCard } from './SliderCard'
// import '../../../img/'


 class Sliderr extends React.Component {
    render() {
      return (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
                <SliderCard 
                    img='../../../img/Property.png'
                    text='Property'
                />
            </Slide>
            <Slide index={1}><SliderCard 
                    img='../../../img/Property.png'
                    text='Property'
                /></Slide>
            <Slide index={2}><SliderCard 
                    img='../../../img/Property.png'
                    text='Property'
                /></Slide>
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      );
    }
  }

  export default Sliderr
// export const Slider = () => {
//     return (
//         <div className='slider'>

//         </div>
//     )
// }