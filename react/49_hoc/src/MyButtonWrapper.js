const MyButtonWrapper = (wrappedComponent) => {
    return (args) => {
        // return (
        //     <div>
        //         Kein Button da!
        //     </div>
        // )
        return wrappedComponent({
            x: args.x * 2
        });
    }
}

export default MyButtonWrapper;
