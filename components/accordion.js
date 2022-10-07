import { useState, useRef } from 'react'
import styles from 'styles/accordion.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function Accordion({ heading, children }){
  const [textIsOpen, setTextIsOpen] = useState(false)       // state変数を宣言

  const toggleText = () => {
    setTextIsOpen((prev) => !prev)                          // ボタンクリックでtextisOpenの値を切替
  }

  const refText = useRef(null)

  return (  // textIsOpenの値に応じてクラス名を切替
    <div className={textIsOpen ? styles.open : styles.close}>
        <h3 className={styles.heading}>
          <button onClick={toggleText}>
            {heading}
            <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
          </button>
        </h3>
        {/* scrollHeightプロパティでは、オーバーフローして画面に表示されていない部分も含めた要素の高さを取得 */}
        <div 
          className={styles.text}
          ref={refText}
          style={{
            '--text-height': refText.current
            ? `${refText.current.scrollHeight}px`
            : '0px',
          }}
        >
          <div className={styles.textInner}>{children}</div>
        </div>
    </div>
  )
}