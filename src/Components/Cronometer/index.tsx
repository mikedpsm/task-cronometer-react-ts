import Button from '../Button';
import Clock from './Clock';
import style from './Cronometer.module.scss';
import { timeToSeconds } from '../../common/utils/time';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';

interface Props {
  selected: ITask | undefined,
  finishTask: () => void
}

export default function Cronometer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeToSeconds(selected.time));
    }
  }, [selected]);

  function countBackwards(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return countBackwards(counter - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometer}>
      <p className={style.title}>Choose a card and start the cronometer</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => countBackwards(time)}>
        Start
      </Button>
    </div >
  )
}