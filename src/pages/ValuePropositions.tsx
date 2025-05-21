import React from 'react'
import ValueProposition from '../components/ValueProposition'

// Images to be used for the value propositions
import value_prop_1 from '../assets/value_prop_images/value_prop_1.png'
import value_prop_2 from '../assets/value_prop_images/value_prop_2.png'
import value_prop_3 from '../assets/value_prop_images/value_prop_3.png'
import value_prop_4 from '../assets/value_prop_images/value_prop_4.png'

const ValuePropositionPage = () => {
    return (
        <div className="flex flex-col items-center">
            <ValueProposition image={value_prop_1} upperText={'community of'} value={800} lowerText={'developers'} valueColor={'#EA4235'} />
            <ValueProposition image={value_prop_2} upperText={''} value={2000} lowerText={'students influenced'} valueColor={'#4286F5'} />
            <ValueProposition image={value_prop_3} upperText={''} value={1250} lowerText={'chapters across world'} valueColor={'#109D58'} />
            <ValueProposition image={value_prop_4} upperText={'influential in'} value={140} lowerText={'countries'} valueColor={'#FABD03'} />
        </div>
    )
}

export default ValuePropositionPage