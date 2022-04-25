import {Injectable} from "@angular/core";
import {InMemoryDbService} from "angular-in-memory-web-api";
import {ArticleEntity} from "../models/article/article-entity";
import {CommentEntity} from "../models/comment/comment-entity";

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {
  createDb() {
    const articles: ArticleEntity[] = [
      {
        id: 'efea95e6-4fc1-487b-a065-3a9f93992c37',
        headline: 'Lorem ipsum dolor sit amet,',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mauris nunc congue nisi vitae suscipit. Lectus nulla at volutpat diam ut venenatis. Nunc sed velit dignissim sodales ut eu sem. Diam vulputate ut pharetra sit amet aliquam id diam. Blandit cursus risus at ultrices mi. Nullam non nisi est sit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vel orci porta non pulvinar. Iaculis nunc sed augue lacus viverra vitae congue. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet risus nullam eget. Dictum fusce ut placerat orci. Dictumst vestibulum rhoncus est pellentesque elit. Faucibus ornare suspendisse sed nisi lacus sed. Ac turpis egestas integer eget aliquet nibh praesent.',
        articleBody: '' +
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mauris nunc congue nisi vitae suscipit. Lectus nulla at volutpat diam ut venenatis. Nunc sed velit dignissim sodales ut eu sem. Diam vulputate ut pharetra sit amet aliquam id diam. Blandit cursus risus at ultrices mi. Nullam non nisi est sit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vel orci porta non pulvinar. Iaculis nunc sed augue lacus viverra vitae congue. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet risus nullam eget. Dictum fusce ut placerat orci. Dictumst vestibulum rhoncus est pellentesque elit. Faucibus ornare suspendisse sed nisi lacus sed. Ac turpis egestas integer eget aliquet nibh praesent.</p>\
          \<p>Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Ornare aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio facilisis mauris sit amet massa. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Neque ornare aenean euismod elementum nisi quis eleifend. Nulla facilisi cras fermentum odio eu. Etiam non quam lacus suspendisse faucibus. Nascetur ridiculus mus mauris vitae ultricies leo integer. Urna nec tincidunt praesent semper feugiat nibh. Sagittis orci a scelerisque purus semper eget. Varius quam quisque id diam vel quam. Orci a scelerisque purus semper eget duis at tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi quis hendrerit dolor magna eget est. Habitant morbi tristique senectus et netus. Pellentesque habitant morbi tristique senectus.</p>\
          \<p>Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Ornare aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio facilisis mauris sit amet massa. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Neque ornare aenean euismod elementum nisi quis eleifend. Nulla facilisi cras fermentum odio eu. Etiam non quam lacus suspendisse faucibus. Nascetur ridiculus mus mauris vitae ultricies leo integer. Urna nec tincidunt praesent semper feugiat nibh. Sagittis orci a scelerisque purus semper eget. Varius quam quisque id diam vel quam. Orci a scelerisque purus semper eget duis at tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi quis hendrerit dolor magna eget est. Habitant morbi tristique senectus et netus. Pellentesque habitant morbi tristique senectus.</p>',
        author: "johndoe@email.com",
        createDate: '21-04-2022'
      },
      {
        id: '0c1f240e-1fb4-46d8-ac14-dd2c9eef8e01',
        headline: 'Lorem ipsum dolor sit amet,',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mauris nunc congue nisi vitae suscipit. Lectus nulla at volutpat diam ut venenatis. Nunc sed velit dignissim sodales ut eu sem. Diam vulputate ut pharetra sit amet aliquam id diam. Blandit cursus risus at ultrices mi. Nullam non nisi est sit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vel orci porta non pulvinar. Iaculis nunc sed augue lacus viverra vitae congue. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet risus nullam eget. Dictum fusce ut placerat orci. Dictumst vestibulum rhoncus est pellentesque elit. Faucibus ornare suspendisse sed nisi lacus sed. Ac turpis egestas integer eget aliquet nibh praesent.',
        articleBody: '' +
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui nunc mattis enim ut tellus elementum sagittis vitae. Mauris nunc congue nisi vitae suscipit. Lectus nulla at volutpat diam ut venenatis. Nunc sed velit dignissim sodales ut eu sem. Diam vulputate ut pharetra sit amet aliquam id diam. Blandit cursus risus at ultrices mi. Nullam non nisi est sit. Nisl tincidunt eget nullam non nisi est sit amet facilisis. Vel orci porta non pulvinar. Iaculis nunc sed augue lacus viverra vitae congue. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Sit amet risus nullam eget. Dictum fusce ut placerat orci. Dictumst vestibulum rhoncus est pellentesque elit. Faucibus ornare suspendisse sed nisi lacus sed. Ac turpis egestas integer eget aliquet nibh praesent.</p>\
          \<p>Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Ornare aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio facilisis mauris sit amet massa. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Neque ornare aenean euismod elementum nisi quis eleifend. Nulla facilisi cras fermentum odio eu. Etiam non quam lacus suspendisse faucibus. Nascetur ridiculus mus mauris vitae ultricies leo integer. Urna nec tincidunt praesent semper feugiat nibh. Sagittis orci a scelerisque purus semper eget. Varius quam quisque id diam vel quam. Orci a scelerisque purus semper eget duis at tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi quis hendrerit dolor magna eget est. Habitant morbi tristique senectus et netus. Pellentesque habitant morbi tristique senectus.</p>\
          \<p>Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Ornare aenean euismod elementum nisi quis eleifend quam. Lorem ipsum dolor sit amet consectetur adipiscing elit. Odio facilisis mauris sit amet massa. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Neque ornare aenean euismod elementum nisi quis eleifend. Nulla facilisi cras fermentum odio eu. Etiam non quam lacus suspendisse faucibus. Nascetur ridiculus mus mauris vitae ultricies leo integer. Urna nec tincidunt praesent semper feugiat nibh. Sagittis orci a scelerisque purus semper eget. Varius quam quisque id diam vel quam. Orci a scelerisque purus semper eget duis at tellus. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Mi quis hendrerit dolor magna eget est. Habitant morbi tristique senectus et netus. Pellentesque habitant morbi tristique senectus.</p>',
        author: "johndoe@email.com",
        createDate: '11-04-2022'
      }
    ]

    const comments: CommentEntity[] = [
      {
        id: '1',
        commentBody: "Test comment 1",
        author: 'ryanhouben1998@gmail.com',
        articleId: 'efea95e6-4fc1-487b-a065-3a9f93992c37'
      },
      {
        id: '2',
        commentBody: "Test comment 2",
        author: 'ryanhouben1998@gmail.com',
        replyId: '1'
      }
    ]
    return {
      articles:articles,
      comments:comments
    }
  }

}
