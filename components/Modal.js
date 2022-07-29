import React, {useRef, useState} from 'react';
import {useRecoilState} from 'recoil';
import {modalState} from '../atoms/modalAtom';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {BsFillCameraFill} from 'react-icons/bs';

const ModalComponent = () => {
  const [open, setOpen] = useRecoilState (modalState);
  const filePickerref = useRef (null);
  const [selectedFile, setSelectedFile] = useState (null);

  const addImagetoPost = e => {
    const reader = new FileReader ();
    if (e.target.files[0]) {
      reader.readAsDataURL (e.target.files[0]);
    }

    reader.onload = readerEvent => {
      setSelectedFile (readerEvent.target.result);
    };
  };
  return (
    <Modal
      open={open}
      onClose={() => setOpen (false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="focus:outline-none border-0"
    >
      <div className="border-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center space-y-4 bg-white items-center md:w-[500px] w-[80vw] px-4 py-4 rounded-lg">
        {selectedFile
          ? <img src={selectedFile} onClick={() => setSelectedFile (null)} className="w-full object-contain cursor-pointer rounded-lg"/>
          : <div
              className="p-2 bg-red-100 flex justify-center items-center rounded-full"
              onClick={() => filePickerref.current.click ()}
            >
              <BsFillCameraFill className="text-4xl text-red-400" />
            </div>}

        <input
          type="file"
          hidden
          ref={filePickerref}
          onChange={addImagetoPost}
        />
        <h1 className="text-2xl font-medium">Upload a Photo</h1>
        <input
          type="text"
          placeholder="Please Enter a Caption"
          className="focus:outline-none text-lg"
        />
        <button className="bg-red-400 hover:bg-red-500 px-4 py-2 rounded-lg text-white font-medium">
          Upload Post
        </button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
