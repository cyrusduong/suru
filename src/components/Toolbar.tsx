import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { AiOutlineDownload, AiOutlineUpload } from 'react-icons/ai';

const Toolbar = () => {
  return <div className="toolbar flex-container-right">
    {/* These will be reversed because it is flex reverse */}
    <Button variant="link"><AiOutlineDownload /></Button>
    <Button variant="link"><AiOutlineUpload /></Button>
  </div>;
}

export default Toolbar;