
import Register from '@/components/primary/Register';
import { postRegister } from '@/database/user';
import { validateRegister } from '@/helpers/validateLogin';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {

    return (
        <>
        <Register />
        </>
    )
}

export default page
