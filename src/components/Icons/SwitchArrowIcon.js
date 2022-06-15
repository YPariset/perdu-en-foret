import Svg, { Path } from "react-native-svg";

export function SwitchArrowIcon({ color = '#fff' }) {
  return (
    <Svg width={17} height={16} fill="none">
      <Path fill={color} d="M3.18 10.128a1.064 1.064 0 0 0 2.128 0V4.184L6.684 5.56a1.064 1.064 0 0 0 1.504-1.505L4.996.863a1.064 1.064 0 0 0-1.505 0L.3 4.055A1.064 1.064 0 0 0 1.803 5.56L3.18 4.184v5.944zm10.64-4.256a1.064 1.064 0 1 0-2.128 0v5.944l-1.376-1.376a1.064 1.064 0 0 0-1.504 1.505l3.192 3.192a1.064 1.064 0 0 0 1.505 0l3.192-3.192a1.064 1.064 0 0 0-1.504-1.505l-1.376 1.376V5.872z"/>
    </Svg>
  )
}