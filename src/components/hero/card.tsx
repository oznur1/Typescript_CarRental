import type { FC } from 'react';
import type { ICar } from '../../types'


type Props={
    car:ICar;
};




const Card: FC<Props> = ({car}) => {
  return (
    <div>
      CARD
    </div>
  )
}

export default Card
