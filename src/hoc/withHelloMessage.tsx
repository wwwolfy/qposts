import { ComponentType } from 'react';
import useCustomEffect from '../hooks/useCustomEffect';

export function withHelloMessage<T extends {}>(
  Component: ComponentType<T>,
  componentName: string
) {
  return (props: T) => {
    // If it is necessary for the hello message to be passed as a prop,
    // then here we would pass it to the component and we would have some custom hook,
    //  that would call the console log messages in the useEffect hook...
    useCustomEffect(() => {
      console.log(`Hello from ${componentName}`);
    }, []);
    return <Component {...props} />;
  };
}
