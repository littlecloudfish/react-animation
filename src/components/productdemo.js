import Ratio from 'react-bootstrap/Ratio';
import ReactPlayer from 'react-player';
function BasicExample() {
  return (

    <>
      {/* {['1x1', '4x3', '16x9', '21x9'].map((ratio) => (
        <Ratio aspectRatio={ratio}>
          <div>{ratio}</div>
        </Ratio>
      ))} */}
      <Ratio aspectRatio='21x9'>
        <div>
            <ReactPlayer 
            url="SnapSave.io-360 Photo Booth Houston-(1080p).mp4"
            height="100%" 
            width="100%"
            controls={false}
            loop={true}
            playing={true}
            muted={true}
            />
        </div>
      </Ratio>
    </>
  );
}

export default BasicExample;