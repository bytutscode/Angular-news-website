import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bucketURL'
})
export class BucketURLPipe implements PipeTransform {

  transform(key: string): string {
    const bucketUrl: string = 'https://f004.backblazeb2.com/file/blogsBucket/';
    return bucketUrl + key;
  }

}
