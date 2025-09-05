
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function useCustomTabBarStyle() {
  const insets = useSafeAreaInsets();

  return {
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#ccc',
    paddingBottom: Math.max(insets.bottom, 6), 
    height: 60 + insets.bottom,
  };
}
