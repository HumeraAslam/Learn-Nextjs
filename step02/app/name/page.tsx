'use client';
import { useRouter } from 'next/navigation';
export default function GiveName() {
  const router = useRouter();
    return (
      <div>
        <center>
          <h1>My name is Humera Aslam </h1><br/>
        </center>
          <button type="button" onClick={() => router.push('/name/address')}>
            Get Address
          </button>
      
      </div>
    )
  }
