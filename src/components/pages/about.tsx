import Container from '@/components/atoms/container';
import Heading2 from '@/components/atoms/headings';
import Header from '@/containers/organisms/header';
import { internalPaths } from '@/paths';

const About = () => (
  <>
    <Header />
    <Container>
      <Heading2>{internalPaths.about.title}</Heading2>
      <div className="overflow-x-auto">
        <div className="table w-full">
          <tbody>
            <tr>
              <th>HN</th>
              <td>Lucky</td>
            </tr>
            <tr>
              <th>居住地</th>
              <td>茨城県</td>
            </tr>
            <tr>
              <th>年齢</th>
              <td>20代前半</td>
            </tr>
            <tr>
              <th>性別</th>
              <td>男性</td>
            </tr>
            <tr>
              <th>職業</th>
              <td>大学生</td>
            </tr>
            <tr>
              <th>好きな本</th>
              <td>
                <ul className="list-disc">
                  <li>高田大介「図書館の魔女」</li>
                  <li>梨木香歩「西の魔女が死んだ」</li>
                  <li>三上延「ビブリア古書堂の事件手帖」</li>
                  <li>櫛木理宇「ホーンテッド・キャンパス」</li>
                  <li>浅葉なつ「神様の御用人」</li>
                  <li>朱野帰子「駅物語」</li>
                  <li>辻村深月「サクラ咲く」</li>
                  <li>新木伸「GJ部」</li>
                  <li>井上堅二「バカとテストと召喚獣」</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>所持しているMCID</th>
              <td>
                <ul className="list-disc">
                  <li>Lucky3028</li>
                  <li>lonsdaleite26</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>
                <p>推しVTuber</p>
              </th>
              <td>
                <ul className="list-disc">
                  <li>AZKi</li>
                  <li>狐狐音の前</li>
                  <li>エルセとさめのぽき</li>
                  <li>のらきゃっと</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>ゲーム遍歴</th>
              <td>
                <ul className="list-disc">
                  <li>Minecraft</li>
                  <li>Shadowverse</li>
                  <li>艦隊これくしょん -艦これ-</li>
                  <li>ウマ娘 プリティーダービー</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>ネット遍歴</th>
              <td className="indent-4 md:indent-0 whitespace-normal text-left">
                <p>
                  2014年頃、艦これをしたいがためにインターネットに浸り始め、ニコ生をメインに活動していました。
                </p>
                <p>
                  2016年頃からMinecraftにハマり、それからマルチプレイを中心に遊んでいます。また、seichi.click
                  networkにて運営チームの一員として日々活動しています。
                </p>
                <p>2017年11月頃、VTuberを追いかけはじめ、現在に至ります。</p>
              </td>
            </tr>
          </tbody>
        </div>
      </div>
    </Container>
  </>
);

export default About;
