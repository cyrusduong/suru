import React from 'react';

import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Toolbar = () => {
  return <div className="toolbar flex-container-right">
    {/* These will be reversed because it is flex reverse */}
    <OverlayTrigger
      overlay={<Tooltip id="tooltip-export">Export</Tooltip>}
      key="tooltip-export"
      placement="bottom"
    >
      {({ ref, ...triggerHandler }) => (
        <Button aria-label="export" variant="link" {...triggerHandler}>
          <div ref={ref}>
            <AiOutlineDownload />
          </div>
        </Button>
      )}
    </OverlayTrigger>

    <OverlayTrigger
      overlay={<Tooltip id="tooltip-import">Import</Tooltip>}
      key="tooltip-import"
      placement="bottom"
    >
      {({ ref, ...triggerHandler }) => (
        <Button aria-label="import" variant="link" {...triggerHandler}>
          <div ref={ref}>
            <AiOutlineUpload />
          </div>
        </Button>
      )}
    </OverlayTrigger>
  </div>;
}

export default Toolbar;