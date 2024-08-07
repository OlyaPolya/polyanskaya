import commonStyle from '../common.module.scss'

export default async function Contacts() {
// contacts сломана нарочно
  let response = await fetch('rgreg');

  return (
    <div className={commonStyle.wrapper} >

    </div>
  );
}


