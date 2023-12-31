import style from './Clock.module.scss';

interface Props {
  time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteTens, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondTens, secondUnit] = String(seconds).padStart(2, "0");
  return (
    <>
      <span className={style.clockNumber} >{minuteTens}</span>
      <span className={style.clockNumber}>{minuteUnit}</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>{secondTens}</span>
      <span className={style.clockNumber}>{secondUnit}</span>
    </>
  )
}