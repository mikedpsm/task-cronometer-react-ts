import Button from '../Button';
import Clock from './Clock';
import style from './Cronometer.module.scss';
import { timeToSeconds } from '../../common/utils/time';

export default function Cronometer() {
  return (
    <div className={style.cronometer}>
      <p className={style.title}>Choose a card and start the cronometer</p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>Start</Button>
    </div>
  )
}