import { IoIosStar } from 'react-icons/io'

export default function Card() {
  return (
    <div className='w-[435px]  card flex flex-col my-[10px]'>
            <img className='w-full' src="https://images8.kabum.com.br/produtos/fotos/444038/monitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r_1712149543_g.jpg" alt="" />
            <div className='pl-[15px] mt-[5px] font-sans'>
                <p className='text-2xl mb-[5px] text-bold'>Monitor Gamer LG UltraGear 27&quot;</p>
                <p className='text-md mb-[5px] text-bold'>R$ 1000</p>
                <p className='text-md mb-[5px] text-bold'>4 Days Delivery</p>
                <div className='flex items-center mb-[10px]'>
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                </div>
                <div className='px-2 py-4 mb-[25px] bg-blue-600 hover:bg-blue-900 cursor-pointer text-white w-[120px] rounded-md text-center'>
                    Add to Cart
                </div>
            </div>
          </div>
  )
}
