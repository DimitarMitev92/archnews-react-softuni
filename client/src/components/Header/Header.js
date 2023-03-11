import { Link } from 'react-router-dom';

export const Header = () => {
    return (

        <header>
            {/*  Start: Navigation Bar */}
            <nav className="navbar fixed-top bg-white border-bottom border-1 border-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="https://lh3.googleusercontent.com/Wsq4zaV2lPTm5SQFzbyusouOA5PIace4uSbpCxLpUvhnht7gd8yqKyugAJVXSpUZc6aDG5iwZyh_Zoa8ewdLr9xUIvuf89Q1zWP634tCqutoD-Dm4Ozxd8K9VC4nEtfafn6XOWiY7XBf_88HxEmqccBGhmRCm4LDw1A7lTehbDgr2Vd7Mdkx7Qj23RX6SMJmQtME-jwyyoN_oS-8CMesqt_iX7iBQhq7M2sPmlD4NpnmESzkWGuYC77Bk0Hkto-tFzyySa3OUQI8w2NIwi0Zqwnwwh5aiqRgt-Xp6f2w-hGCVRK8ZqX1w06LmC7FIScML7nRPL_sHSNmqmZWB2oIXwjDN-oLL3Im6Id74E7hlm7ZhC8a72uDtg3duaJCdn5oBlQPusiGe70zooVaH9C97Jk_hDE1uRiZs-wzgRvhym2kcuqpqF9zyVC1_v-qqOtrDbwnP-ymg0zmwV43tYM4jt9F6ndwbtA-KImfL39r0gYXnWfUFzirAvKLfBiQlXpuMJVtbGyae8TBTPyHgLyOS_QnW1SZf_Xc10iCBohMc6zGIrIzJwwnDGhjuPOhwStazAu-2LjlwnIftho2O4C0GMWAa9-N15KGSKrOwN3DAlMWgNgCnQcnJOgV3b0iZbftxp10vekrkC6YKmm98ewisW07M69dDHGYMmvvm0I2GYTxR2bYZ6OvtngAFJ8R0a1dsbBNvHNa20nkk8KqMMo2PFjI1i8NVMtH7gwIldyzWYZX2AevLCDSrNDSQP5e_HPhygX9fKBdtCMVGfdLeKAeqhkELn14OqUT3-sPYzCuus3aXyCFpQItoOMP5SVoO2doCpxgmu7lekHUkkHLDtU5YaxMiJ0Pp_W82pzfm1ZXI2pn56R1JlONHlusJo8FWV7-xzTduL8B7Ea3o8wpBhvvLxC3udTLM57BslBB65ZxwhJY=w797-h174-no?authuser=0" alt="Logo" height="40"
                            className="d-inline-block align-text-center" />
                    </Link>
                    <ul className="nav nav-pills ">
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/">Home</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/posts">Posts</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/contact-us">Contact Us</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/create">Create Post</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/register">Register</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/login">Login</Link>
                        </li>
                        <li className="nav-item p-1">
                            <Link className="btn btn-secondary" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {/*  End: Navigation Bar */}
        </header>

    );
};