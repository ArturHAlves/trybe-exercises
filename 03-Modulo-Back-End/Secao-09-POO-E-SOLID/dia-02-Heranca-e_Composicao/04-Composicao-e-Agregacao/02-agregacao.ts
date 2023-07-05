class Friend {
  private nickname: string;

  public getNickname(): string {
    return this.nickname;
  }

  public setNickname(nickname: string) {
    this.nickname = nickname;
  }
}

class SocialMediaAccount {
  private friends = new Array<Friend>();

  public addFriend(friend: Friend) {
    this.friends.push(friend);
  }

  public printFriends() {
    this.friends.map((friend) => console.log(friend));
  }
}

const socialMediaAccount = new SocialMediaAccount();

const friendCarol = new Friend();
friendCarol.setNickname('Carol');

const friendFernando = new Friend();
friendFernando.setNickname('Fernando');

socialMediaAccount.addFriend(friendCarol);
socialMediaAccount.addFriend(friendFernando);
socialMediaAccount.printFriends();