package naver.cloud;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.Data;

@Configuration
@PropertySource("classpath:/naver.properties")
@ConfigurationProperties(prefix = "ncp")
@Data
public class NaverConfig {
	//프로퍼티 파일에서 선언된 값 중 에서
	//ncp.* 이름으로 된 프로퍼티값을 받을 필드 선언
	private String accessKey;
	private String secretKey;
	private String regionName;
	private String endPoint;

}
