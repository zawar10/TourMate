import React from 'react';
import { Shield, User as UserIcon } from 'lucide-react'; 

const UserPanel = () => {
    let userEmail = 'Traveler';
    const mockUser = localStorage.getItem("mock_tourmate_user");
    if (mockUser) {
        userEmail = JSON.parse(mockUser).email;
    }

    return (
        <div className="min-h-[calc(100vh-140px)] bg-[#0A1412] text-white pt-16 pb-20 px-4 flex items-center justify-center">
            <div className="p-10 bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl text-center max-w-xl w-full">
                <Shield className="h-10 w-10 text-[#16423C] mx-auto mb-6" />
                <h1 className="text-4xl font-extrabold mb-4 text-[#E1E1D9]">
                    Secure User Panel
                </h1>
                <p className="text-white/70 text-lg mb-6">
                    You have successfully accessed this page because you are logged in as:
                </p>
                <div className="bg-[#0A1412] p-4 rounded-lg border border-[#16423C]/50 inline-block">
                    <UserIcon className="mr-3 text-white/70 inline h-5 w-5" />
                    <span className="font-mono text-[#E1E1D9] font-semibold">{userEmail}</span>
                </div>
                <p className="text-white/50 mt-8 text-sm">
                    This content is protected by the `PrivateRoute`. If you log out, you will be redirected.
                </p>
            </div>
        </div>
    );
};

export default UserPanel;