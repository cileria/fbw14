import React from 'react'

const UserTableWrapper = (wrappedComponent) => {
    return (args) => {
        if(args.loading) {
            return (
                <div>
                    Loading ...
                </div>
            )
        }
        else {
            return wrappedComponent({
                users: args.users
            });
        }

    }
}

export default UserTableWrapper;