import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faPercent, faRotateLeft, faTruck } from '@fortawesome/free-solid-svg-icons';
import PolicyOption from './PolicyOption';
const Policy = () => {
  return (
    <div className="policy">
        <div className="policy-option">
          <PolicyOption
            icon={
              <FontAwesomeIcon icon={faTruck} width={"45px"} height={"30px"} />
            }
            h5={"Free Delivery"}
            p={"Order from all time"}
          />
          <PolicyOption
            icon={
              <FontAwesomeIcon
                icon={faRotateLeft}
                width={"45px"}
                height={"30px"}
              />
            }
            h5={"Return & Refund"}
            p={"Money back guarantee"}
          />
          <PolicyOption
            icon={
              <FontAwesomeIcon
                icon={faPercent}
                width={"45px"}
                height={"30px"}
              />
            }
            h5={"Member Discount"}
            p={"On over order $99"}
          />
          <PolicyOption
            icon={
              <FontAwesomeIcon
                icon={faHeadset}
                width={"45px"}
                height={"30px"}
              />
            }
            h5={"Support 24/7"}
            p={"Contact us 24 hours a day"}
          />
        </div>
      </div>
  )
}

export default Policy