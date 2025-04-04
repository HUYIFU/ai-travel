import React, { useState } from "react";
import { View, Text, Button, Image, ScrollView } from "@tarojs/components";
import "./index.scss";

const Index = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabClick = (index) => {
    setCurrentTab(index);
  };

  return (
    <View className="index">
      <View className="header">
        <Text className="title">长沙-湘潭两日游攻略</Text>
        <Text className="subtitle">
          驾车距离: 54.6公里 | 预计行驶时间: 55分钟
        </Text>
      </View>

      <View className="tabs">
        <View
          className={`tab-item ${currentTab === 0 ? "active" : ""}`}
          onClick={() => handleTabClick(0)}
        >
          行程概览
        </View>
        <View
          className={`tab-item ${currentTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          景点推荐
        </View>
        <View
          className={`tab-item ${currentTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          美食住宿
        </View>
        <View
          className={`tab-item ${currentTab === 3 ? "active" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          交通指南
        </View>
      </View>

      <ScrollView scrollY className="tab-content">
        {currentTab === 0 && (
          <View className="overview-content">
            <View className="card">
              <View className="card-title">两日游概览</View>
              <Text className="card-text">
                长沙和湘潭相距约55公里，两日游让您能充分体验湖湘文化、品尝地道美食、游览著名景点，不再匆忙赶路。我们为您精心安排了两天的行程，让您的旅行既舒适又充实。
              </Text>
            </View>

            <View className="day-plan">
              <View className="day-title">第一天 - 长沙市</View>
              <View className="timeline">
                <View className="timeline-item">
                  <View className="time">08:30</View>
                  <View className="content">
                    <Text className="event">出发前往橘子洲头</Text>
                    <Text className="desc">
                      游览时长约2小时，欣赏湘江美景和毛主席雕像
                    </Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">11:00</View>
                  <View className="content">
                    <Text className="event">前往太平老街享用午餐</Text>
                    <Text className="desc">
                      品尝长沙特色小吃，如口味虾、臭豆腐等
                    </Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">13:30</View>
                  <View className="content">
                    <Text className="event">游览岳麓山风景名胜区</Text>
                    <Text className="desc">参观岳麓书院，领略千年学府风采</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">16:30</View>
                  <View className="content">
                    <Text className="event">前往长沙湘江风光带</Text>
                    <Text className="desc">
                      傍晚漫步江边，等待橘子洲头夜景亮灯
                    </Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">18:30</View>
                  <View className="content">
                    <Text className="event">晚餐时间</Text>
                    <Text className="desc">
                      推荐前往火宫殿或者诚食·印象农夫品尝湘菜
                    </Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">20:00</View>
                  <View className="content">
                    <Text className="event">入住酒店休息</Text>
                    <Text className="desc">推荐市中心附近酒店，方便游览</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="day-plan">
              <View className="day-title">第二天 - 湘潭市</View>
              <View className="timeline">
                <View className="timeline-item">
                  <View className="time">08:00</View>
                  <View className="content">
                    <Text className="event">酒店早餐</Text>
                    <Text className="desc">享用早餐，补充能量</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">09:00</View>
                  <View className="content">
                    <Text className="event">驱车前往湘潭市</Text>
                    <Text className="desc">经S41长潭西高速，约55分钟车程</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">10:30</View>
                  <View className="content">
                    <Text className="event">参观湘潭市齐白石纪念馆</Text>
                    <Text className="desc">欣赏国画大师齐白石的艺术作品</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">12:30</View>
                  <View className="content">
                    <Text className="event">在湘潭享用午餐</Text>
                    <Text className="desc">推荐尝试田园小镇或老徐家鸭院子</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">14:00</View>
                  <View className="content">
                    <Text className="event">游览窑湾历史文化街区</Text>
                    <Text className="desc">
                      体验湘潭传统文化，购买特色纪念品
                    </Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">16:00</View>
                  <View className="content">
                    <Text className="event">前往湘江风光带散步</Text>
                    <Text className="desc">欣赏湘江两岸风景</Text>
                  </View>
                </View>
                <View className="timeline-item">
                  <View className="time">17:30</View>
                  <View className="content">
                    <Text className="event">返回长沙</Text>
                    <Text className="desc">结束愉快的两日游行程</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}

        {currentTab === 1 && (
          <View className="attractions-content">
            <View className="section-title">长沙市精选景点</View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">橘子洲风景名胜区</Text>
                <Text className="tag hot">必游</Text>
              </View>
              <Text className="address">地址: 橘子洲头2号</Text>
              <Text className="description">
                橘子洲是湘江中的一个长条形洲岛，因盛产橘子而得名。景区内有毛泽东青年艺术雕像、橘子洲头等著名景点，晚间灯光秀非常壮观。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 免费</Text>
                <Text className="tip-item">开放时间: 全天</Text>
                <Text className="tip-item">建议游玩: 2-3小时</Text>
              </View>
            </View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">岳麓山风景名胜区</Text>
                <Text className="tag">推荐</Text>
              </View>
              <Text className="address">地址: 登高路58号</Text>
              <Text className="description">
                岳麓山是国家5A级景区，融自然风光与人文景观于一体，内有岳麓书院、爱晚亭、麓山寺等众多景点，是湖南最著名的名胜古迹之一。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 免费</Text>
                <Text className="tip-item">开放时间: 07:00-18:00</Text>
                <Text className="tip-item">建议游玩: 3-4小时</Text>
              </View>
            </View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">岳麓书院</Text>
                <Text className="tag">历史文化</Text>
              </View>
              <Text className="address">地址: 麓山路273号</Text>
              <Text className="description">
                创建于北宋开宝九年(976年)，是中国古代四大书院之一，有"千年学府"之称，为国家重点文物保护单位，是了解中国古代教育的重要场所。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 60元</Text>
                <Text className="tip-item">开放时间: 08:30-17:00</Text>
                <Text className="tip-item">建议游玩: 1-2小时</Text>
              </View>
            </View>

            <View className="section-title">湘潭市精选景点</View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">湘潭窑湾历史文化旅游街区</Text>
                <Text className="tag hot">必游</Text>
              </View>
              <Text className="address">地址: 新马路与沿江中路交叉口</Text>
              <Text className="description">
                窑湾曾是湘潭最繁华的水陆码头，保留了大量明清时期的建筑风格，是了解湘潭历史文化的重要窗口，街区内有众多特色商铺和美食小吃。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 免费</Text>
                <Text className="tip-item">开放时间: 全天</Text>
                <Text className="tip-item">建议游玩: 2小时</Text>
              </View>
            </View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">湘潭市齐白石纪念馆</Text>
                <Text className="tag">艺术</Text>
              </View>
              <Text className="address">地址: 中山路街道大湖路2号</Text>
              <Text className="description">
                纪念馆展出了齐白石先生的生平事迹和大量艺术作品，是了解这位湘潭籍国画大师艺术成就的重要场所。馆内陈列有齐白石的近百幅原作。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 30元</Text>
                <Text className="tip-item">开放时间: 09:00-17:00</Text>
                <Text className="tip-item">建议游玩: 1-2小时</Text>
              </View>
            </View>

            <View className="attraction-card">
              <View className="attraction-title">
                <Text className="name">湘江风光带</Text>
                <Text className="tag">休闲</Text>
              </View>
              <Text className="address">地址: 滨江路</Text>
              <Text className="description">
                湘潭湘江风光带是城市滨江绿化带，环境优美，是当地居民休闲娱乐的好去处。漫步江边，可以欣赏湘江两岸的自然风光和城市景观。
              </Text>
              <View className="tips">
                <Text className="tip-item">门票: 免费</Text>
                <Text className="tip-item">开放时间: 全天</Text>
                <Text className="tip-item">建议游玩: 1小时</Text>
              </View>
            </View>
          </View>
        )}

        {currentTab === 2 && (
          <View className="food-accommodation-content">
            <View className="section-title">长沙特色美食</View>

            <View className="food-card">
              <View className="food-title">臭豆腐</View>
              <Text className="food-desc">
                长沙最著名的小吃之一，外酥里嫩，搭配特制的酱料和辣椒，香气四溢，回味无穷。推荐前往太平老街或黄兴路步行街品尝。
              </Text>
              <Text className="recommend">推荐店铺: 火宫殿、文和友臭豆腐</Text>
            </View>

            <View className="food-card">
              <View className="food-title">口味虾</View>
              <Text className="food-desc">
                长沙特色菜，小龙虾配以辣椒、蒜蓉等调料烹制，鲜辣可口，是夜宵和下酒菜的首选。
              </Text>
              <Text className="recommend">推荐店铺: 文和友、诚食·印象农夫</Text>
            </View>

            <View className="food-card">
              <View className="food-title">糖油粑粑</View>
              <Text className="food-desc">
                传统湖南小吃，外酥内软，裹满白糖和芝麻，甜而不腻，是长沙传统小吃的代表。
              </Text>
              <Text className="recommend">
                推荐店铺: 火宫殿、老长沙糖油粑粑
              </Text>
            </View>

            <View className="section-title">湘潭特色美食</View>

            <View className="food-card">
              <View className="food-title">湘潭拖油糍粑</View>
              <Text className="food-desc">
                湘潭特色小吃，选用优质糯米制成，外层裹满芝麻和白糖，口感绵软，甜而不腻。
              </Text>
              <Text className="recommend">
                推荐店铺: 湘潭窑湾街区内的传统小吃铺
              </Text>
            </View>

            <View className="food-card">
              <View className="food-title">湘潭米粉</View>
              <Text className="food-desc">
                与长沙米粉有所区别，汤底更为鲜美，配料丰富，是湘潭最具代表性的小吃之一。
              </Text>
              <Text className="recommend">
                推荐店铺: 田园小镇、老徐家鸭院子
              </Text>
            </View>

            <View className="section-title">住宿推荐</View>

            <View className="hotel-card">
              <View className="hotel-title">长沙市区酒店</View>
              <View className="hotel-list">
                <View className="hotel-item">
                  <Text className="hotel-name">花港国际大酒店</Text>
                  <Text className="hotel-price">价格: ¥350-500/晚</Text>
                  <Text className="hotel-location">
                    位置: 交通便捷，靠近主要景点
                  </Text>
                </View>
                <View className="hotel-item">
                  <Text className="hotel-name">7天优品酒店(桃阳商业街店)</Text>
                  <Text className="hotel-price">价格: ¥180-250/晚</Text>
                  <Text className="hotel-location">
                    位置: 经济实惠，交通便利
                  </Text>
                </View>
                <View className="hotel-item">
                  <Text className="hotel-name">长沙悦江酒店</Text>
                  <Text className="hotel-price">价格: ¥450-650/晚</Text>
                  <Text className="hotel-location">位置: 近湘江，环境优美</Text>
                </View>
              </View>
            </View>

            <View className="hotel-card">
              <View className="hotel-title">湘潭市区酒店</View>
              <View className="hotel-list">
                <View className="hotel-item">
                  <Text className="hotel-name">湘潭熙和宾馆</Text>
                  <Text className="hotel-price">价格: ¥200-300/晚</Text>
                  <Text className="hotel-location">
                    位置: 近汽车西站，交通便利
                  </Text>
                </View>
                <View className="hotel-item">
                  <Text className="hotel-name">城市之鑫精品酒店</Text>
                  <Text className="hotel-price">价格: ¥180-250/晚</Text>
                  <Text className="hotel-location">位置: 市中心，购物便捷</Text>
                </View>
              </View>
            </View>
          </View>
        )}

        {currentTab === 3 && (
          <View className="transportation-content">
            <View className="card">
              <View className="card-title">自驾路线</View>
              <View className="route-info">
                <View className="route-header">
                  <Text className="route-name">长沙市 → 湘潭市</Text>
                  <Text className="route-stats">
                    总距离: 54.6km | 时间: 55分钟
                  </Text>
                </View>
                <View className="route-detail">
                  <View className="point">
                    <View className="point-marker start"></View>
                    <Text className="point-text">
                      起点: 长沙市 (112.938882,28.228304)
                    </Text>
                  </View>
                  <View className="route-path"></View>
                  <View className="point">
                    <View className="point-marker end"></View>
                    <Text className="point-text">
                      终点: 湘潭市 (112.945439,27.831360)
                    </Text>
                  </View>
                </View>
                <View className="route-direction">
                  <View className="direction-title">推荐路线:</View>
                  <View className="direction-steps">
                    <Text className="step">1. 杜鹃路往西行驶约1.8公里</Text>
                    <Text className="step">2. 进入西二环南行约10公里</Text>
                    <Text className="step">
                      3. 经南二环罗家嘴立交桥进入S41长潭西高速
                    </Text>
                    <Text className="step">4. 沿S41长潭西高速行驶约25公里</Text>
                    <Text className="step">5. 经莲城大道往南行驶约7公里</Text>
                    <Text className="step">6. 经文星门路往东南行驶约5公里</Text>
                    <Text className="step">7. 经湘潭三大桥到达湘潭市区</Text>
                  </View>
                </View>
              </View>
            </View>

            <View className="card">
              <View className="card-title">公共交通</View>
              <View className="public-transport">
                <View className="transport-option">
                  <View className="option-title">长途汽车</View>
                  <Text className="option-detail">
                    长沙汽车南站有发往湘潭的班车，发车频率约30分钟一班，票价约25-30元，车程约1小时。
                  </Text>
                </View>
                <View className="transport-option">
                  <View className="option-title">高铁/动车</View>
                  <Text className="option-detail">
                    从长沙高铁站乘坐高铁到湘潭站，车程约20分钟，票价约25-40元，每天多班次发车。
                  </Text>
                </View>
                <View className="transport-option">
                  <View className="option-title">市内交通</View>
                  <Text className="option-detail">
                    长沙市内可乘坐地铁和公交车前往各大景点；湘潭市内主要靠公交车和出租车出行，建议下载当地公交APP查询路线。
                  </Text>
                </View>
              </View>
            </View>

            <View className="card">
              <View className="card-title">旅行贴士</View>
              <View className="travel-tips">
                <View className="tip-item">
                  <View className="tip-label">最佳季节:</View>
                  <Text className="tip-content">
                    3-5月和9-11月是游览长沙和湘潭的最佳时间，气温适宜，雨水较少。
                  </Text>
                </View>
                <View className="tip-item">
                  <View className="tip-label">天气:</View>
                  <Text className="tip-content">
                    湖南属亚热带季风气候，夏季炎热多雨，冬季温和少雨，出行前建议查看当地天气预报。
                  </Text>
                </View>
                <View className="tip-item">
                  <View className="tip-label">消费水平:</View>
                  <Text className="tip-content">
                    长沙和湘潭消费水平中等，两日游人均预算约800-1500元(不含购物)。
                  </Text>
                </View>
                <View className="tip-item">
                  <View className="tip-label">特产购买:</View>
                  <Text className="tip-content">
                    推荐购买湖南茶叶、湘绣、湘潭铜器等特色产品作为纪念品。
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
