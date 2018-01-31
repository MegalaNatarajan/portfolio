#include <stdio.h>
#include <string.h>
#include <stdlib.h>

main() {

char* input = "malayalam";
char* process = (char *)malloc(strlen(input));
strcpy(process,input);
printf ("The input string is - %s \n", input);
printf ("The process string is - %s \n", process);
int i,j;
int len = strlen(input);
printf("Length of string is - %d", len);

for (i=0;i<len;i++){
   printf("Current char - %c\n", input[i]);
}

for (i=0,j=len-1; i< len/2 ; i++, j--) {
   char tmp = process[i];
   printf("Current char - %c\n", tmp);
   process[i] = process[j];
   process[j] = tmp;
}
printf ("The input string is - %s", process);
}
