const Container = ({children, width = 'full'}: {children?: React.ReactNode, width?: string | number}) => {
    if (typeof width === 'number') {
        return (
            <div className="flex justify-center items-center w-full">
              <div style={{width: `${width}px`}}>
                {children}
              </div>
            </div>
        )
    }
    
    return (
        <div className="flex justify-center items-center w-full">
          <div className={`w-${width}`}>
            {children}
          </div>
        </div>
    )
}

export { Container }