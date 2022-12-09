import React from 'react'

import Post from './Post'


function Main() {
  return (
    <div className='px-8 mx-auto max-w-3xl'>
      <section>

        <h1 className='text-center text-2xl mb-2'>会員登録</h1>
        <div className='mx-auto max-w-md shadow-md p-3 bg-gray-50 rounded-lg'>
          <div className='grid text-center pt-3'>
            <h2 className='py-6 text-gray-800'>suppurt the FRsite</h2>
            <p className='pb-4 font-bold text-lg'>¥500/月</p>
            <a href='/' className='mx-7 py-2 border rounded-lg bg-cyan-600 hover:bg-cyan-800'>
              <button className='text-white'>参加する</button>
            </a>
          </div>
          <h2 className='text-gray-600 text-md mt-3 ml-2'>サポート内容</h2>
          <div>
            <li className='text-gray-500 text-sm my-2'>最新の情報をお届けします</li>
            <li className='text-gray-500 text-sm my-2'>あなたの意見をコンテンツに反映させます</li>
          </div>

        </div>
      </section>

      <section>
        <h2 className='text-center text-2xl mb-2 mt-20'>FRsiteについて</h2>
        <div className='mx-auto max-w-2xl shadow-md p-5 bg-gray-50 rounded-lg'>
          <p className='text-lg'>エコノミー, テクノロジー, 政治についての発信をしています。</p>

          <div className='text-md text-gray-500 mt-3'>---SNS---</div>
          <a className='text-md text-blue-600'>Twitter</a>
          <br />
          <a className='text-md text-blue-600'>LINE</a>
          <a className='text-md'>(＊最新情報の通知を受け取れます)</a>
        </div>
      </section>

      <section>
        <div className='mx-auto mt-20 max-w-2xl shadow-md p-5 bg-gray-50 rounded-lg'>
          <h3 className='text-center text-sm my-4'>サポーターになることで、あなたはすぐに4件への限定投稿へのアクセスが可能になります</h3>
          <div className='flex justify-around'>
            <div>
              <span className='font-bold'>&ensp;&nbsp;1</span>
              <p>文献</p>
            </div>
            <div>
              <span className='font-bold'>&ensp;&nbsp;3</span>
              <p>動画</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Post />
      </section>
    </div>
  )
}

export default Main