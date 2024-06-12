import { HTML , useProgress } from '@react-three/drei';

const Loader = () => {
  const {progress} = useProgress();
  return (
    <HTML>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 14,
        fontWeight: 800,
        color: '#f1f1f1',
        marginTop: 40
      }}>{progress.toFixed(2)}%</p>
    </HTML>
  )
}

export default Loader