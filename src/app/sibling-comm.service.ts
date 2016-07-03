import { Injectable } from '@angular/core';
import { Player } from './player';
import { TopicInfo } from './topic-info';

@Injectable()
export class SiblingCommService {
    private makePlayer(n:string):Player {
        return {
            name: n, 
            isImpostor: false,
            shown: false
        }
    }


  players:Player[] = "Joe Larry Curly Moe".split(" ").map(n => this.makePlayer(n));
    
  topicInfo:TopicInfo;
  
  setData(players: Player[], topicInfo: TopicInfo) {
    this.players = players;
    this.topicInfo = topicInfo;
  }

  getPlayers():Player[] {
    return this.players;
  }
  getTopicInfo():TopicInfo {
    return this.topicInfo;
  }
}
